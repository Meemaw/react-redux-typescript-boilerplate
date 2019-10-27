/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from 'events';

import { Dictionary } from 'lodash';

import {
  EndpointConfig,
  FetchApi,
  FetchConfig,
  ResourceFetch,
  ResourceFetchTemplate,
} from '../../meta/types/Api';
import { ContentTypes } from '../../meta/types/Content';
import { HttpMethod, HttpStatus } from '../../meta/types/Http';
import { getAuthorizationHeader } from '../auth';
import { toFormData } from '../form';
import { injectParameters } from '../urls';

type Mappings = {
  [contentType: string]: (resp: any) => any;
};

const defaultHeaders: Dictionary<string> = {};

const contentTypeMappings: Mappings = {
  [ContentTypes.JSON]: resp => resp.json(),
  [ContentTypes.JS]: resp => resp.json(),
  [ContentTypes.XML]: resp => resp.text(),
  [ContentTypes.TEXT]: resp => resp.text(),
  [ContentTypes.CSV]: resp => resp.text(),
  [ContentTypes.HTML]: resp => resp.text(),
};

const DEFAULT_ENDPOINT_CONFIG: EndpointConfig = {
  authenticated: true,
  endpointHeaders: {},
};

class Api extends EventEmitter implements FetchApi {
  GET = this._makeMethod(HttpMethod.GET);
  POST = this._makeMethod(HttpMethod.POST, true);
  PUT = this._makeMethod(HttpMethod.PUT, true);
  DELETE = this._makeMethod(HttpMethod.DELETE);
  PATCH = this._makeMethod(HttpMethod.PATCH, true);

  setDefaultHeader = (key: string, value: string) => {
    defaultHeaders[key] = value;
  };

  _makeMethod(method: HttpMethod, hasBody = false): ResourceFetchTemplate<any, any> {
    return (
      urlTemplate: string,
      endpointConfig: EndpointConfig = DEFAULT_ENDPOINT_CONFIG,
    ): ResourceFetch<any, any> => {
      return (data: any = undefined, fetchConfig: FetchConfig = {}): Promise<any> => {
        const url = injectParameters(urlTemplate, data, hasBody);
        const { authenticated, endpointHeaders } = endpointConfig;

        const headers: any = {
          Accept: ContentTypes.JSON,
          ...defaultHeaders,
          ...endpointHeaders,
        };

        let body = null;
        if (hasBody && data) {
          if (typeof data === 'string') {
            body = data;
            headers['Content-Type'] = ContentTypes.TEXT;
          } else if (data instanceof FormData || fetchConfig.asFormData) {
            body = toFormData(data);
            headers['Content-Type'] = ContentTypes.FORM_DATA;
          } else {
            body = JSON.stringify(data);
            headers['Content-Type'] = ContentTypes.JSON;
          }
        }

        if (authenticated && !headers.Authorization) {
          headers.Authorization = getAuthorizationHeader();
        }

        return this._makeRequest(method, url, headers, body);
      };
    };
  }

  _makeRequest(
    method: HttpMethod,
    url: string,
    headers: HeadersInit,
    body: string | FormData | null,
  ): Promise<any> {
    return fetch(url, {
      method,
      headers,
      body,
    })
      .then(response => {
        this.emit(`${response.status}`, url);
        const contentType = response.headers.get('Content-Type');
        const defaultMapping = (resp: Response) => resp.arrayBuffer();
        let mappingFunction = contentType ? contentTypeMappings[contentType] : defaultMapping;
        if (!mappingFunction) {
          mappingFunction = defaultMapping;
        }

        return new Promise(resolve => resolve(mappingFunction(response)))
          .catch(err => {
            Promise.reject({
              type: 'NetworkError',
              status: response.status,
              message: err,
            });
          })
          .then(responseBody => {
            if (response.ok) {
              return responseBody;
            }

            if (response.status >= HttpStatus.SERVER_ERROR) {
              return Promise.reject({
                type: 'ServerError',
                status: response.status,
                body: responseBody,
              });
            }
            if (response.status < HttpStatus.SERVER_ERROR) {
              return Promise.reject({
                type: 'ApplicationError',
                status: response.status,
                body: responseBody,
              });
            }
          });
      })
      .catch(err => {
        return err.type
          ? Promise.reject(err)
          : Promise.reject({
            type: 'ConnectionRefused',
            status: HttpStatus.SERVER_ERROR,
            body: 'Check your internet connection',
          });
      });
  }
}

const instance = new Api();

export default instance;

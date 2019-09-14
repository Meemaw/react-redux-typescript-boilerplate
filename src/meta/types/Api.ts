export type NoPayload = never;

export type ResourceFetchTemplate<R, P = NoPayload> = (
  urlTemplate: string,
  endpointConfig?: EndpointConfig,
) => ResourceFetch<R, P>;

export type FetchConfig = {
  asFormData?: boolean;
};

export type ResourceFetch<R, P = NoPayload> = [P] extends [never]
  ? NoPayloadFetch<R>
  : PayloadFetch<R, P>;

type NoPayloadFetch<R> = (fetchConfig?: FetchConfig) => Promise<R>;
type PayloadFetch<R, P> = (data: P, fetchConfig?: FetchConfig) => Promise<R>;

export type EndpointConfig = {
  authenticated?: boolean;
  endpointHeaders?: HeadersInit;
};

export interface FetchApi {
  GET: ResourceFetchTemplate<any, any>;
  POST: ResourceFetchTemplate<any, any>;
  PATCH: ResourceFetchTemplate<any, any>;
  DELETE: ResourceFetchTemplate<any, any>;
  PUT: ResourceFetchTemplate<any, any>;
}

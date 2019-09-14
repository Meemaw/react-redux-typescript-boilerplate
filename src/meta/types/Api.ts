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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FetchApi<R = any, P = any> {
  GET: ResourceFetchTemplate<R, P>;
  POST: ResourceFetchTemplate<R, P>;
  PATCH: ResourceFetchTemplate<R, P>;
  DELETE: ResourceFetchTemplate<R, P>;
  PUT: ResourceFetchTemplate<R, P>;
}

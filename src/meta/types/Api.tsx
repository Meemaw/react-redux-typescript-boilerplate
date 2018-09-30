export type NoPayload = never;

export type ResourceFetchTemplate<R, P = NoPayload> = (
  urlTemplate: string,
  endpointConfig?: EndpointConfig,
) => ResourceFetch<R, P>;

export type FetchConfig = {
  asFormData?: boolean;
};

export type ResourceFetch<R, P = NoPayload> = (data?: P, fetchConfig?: FetchConfig) => Promise<R>;

export type EndpointConfig = {
  authenticated?: boolean;
  endpointHeaders?: HeadersInit;
};

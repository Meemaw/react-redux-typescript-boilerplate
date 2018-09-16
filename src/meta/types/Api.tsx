export type ResourceFetchTemplate<T> = (
  urlTemplate: string,
  authenticated?: boolean,
  endpointHeaders?: HeadersInit,
) => ResourceFetch<T>;

export type ResourceFetch<T> = (data?: any, asFormData?: boolean) => Promise<T>;

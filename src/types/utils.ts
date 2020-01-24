export type ValueOf<T> = T[keyof T];

export type PickValueOf<T, V extends keyof T> = ValueOf<Pick<T, V>>;

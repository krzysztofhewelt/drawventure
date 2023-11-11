declare global {
  export type ValueOf<T> = T[keyof T];
}

export {};

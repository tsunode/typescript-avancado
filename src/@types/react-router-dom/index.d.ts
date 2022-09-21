import { Location } from "react-router-dom";

interface ILocation<S> extends Location {
  state: S;
  loc: T
}

declare module 'react-router-dom' {
  export declare function useLocation<S>(): ILocation<S>;
}
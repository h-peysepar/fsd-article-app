import { ReactNode } from "react";
import { Provider } from "react-redux";
import { mainStore } from "../stores/MainStore";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};

import { SHOW_LOADER, HIDE_LOADER } from "./../types";

export const showLoader = () => {
  return { type: SHOW_LOADER, payload: true };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER, payload: false };
};

import env from "./env";

export const log = (...message: any) => {
  if (env.DEBUG) {
    console.log(...message);
  }
};

export const error = (...message: any) => {
  if (env.DEBUG) {
    console.error(...message);
  }
};
export const warn = (...message: any) => {
  if (env.DEBUG) {
    console.warn(...message);
  }
};

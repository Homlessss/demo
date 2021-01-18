import { toast, ToastContent, ToastOptions } from "react-toastify";

const mergeOptions = (options?: ToastOptions) =>
  Object.assign<ToastOptions, ToastOptions | undefined>(
    {
      autoClose: 3000,
      position: "top-center",
      hideProgressBar: true,
      pauseOnHover: false,
    },
    options
  );

export const notify = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast(content, mergeOptions(options));

export const notifySuccess = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast.success(content, mergeOptions(options));

export const notifyInfo = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast.info(content, mergeOptions(options));

export const notifyWarning = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast.warn(content, mergeOptions(options));

export const notifyError = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast.error(content, mergeOptions(options));

export const notifyDark = (
  content: ToastContent,
  options?: ToastOptions | undefined
) => toast.dark(content, mergeOptions(options));

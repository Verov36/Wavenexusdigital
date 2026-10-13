import { Toaster as Sonner, type ToasterProps } from "sonner";

// The site is dark-only, so the toasts are too.
export function Toaster(props: ToasterProps) {
  return <Sonner theme="dark" className="toaster group" {...props} />;
}

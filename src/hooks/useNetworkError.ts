import { useEffect } from "react";
import { useError } from "../context/ErrorContext";

export function useNetworkError() {
  const { showError } = useError();

  useEffect(() => {
    const offline = () => showError("Sin conexión a internet 🚫");

    window.addEventListener("offline", offline);

    return () => window.removeEventListener("offline", offline);
  }, [showError]);
}

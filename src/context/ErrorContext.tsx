import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

type ErrorContextType = {
  showError: (message: string) => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

type ErrorProviderProps = {
  children: ReactNode;
};

export function ErrorProvider({ children }: ErrorProviderProps) {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const showError = useCallback((message: string) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ErrorContext.Provider>
  );
}

type Toast = {
  id: number;
  message: string;
};

function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="
            bg-red-500 text-white px-4 py-3 rounded-xl shadow-lg
            animate-slide-in
          "
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export function useError(): ErrorContextType {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError debe usarse dentro de ErrorProvider");
  }
  return context;
}

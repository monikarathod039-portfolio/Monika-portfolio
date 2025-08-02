
import React from "react";

export function Button({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  const styles = variant === "outline"
    ? "px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
    : "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700";
  return <button className={styles}>{children}</button>;
}

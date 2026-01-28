import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define the shape of our context
interface DeviceContextType {
  isMobile: boolean;
}

// Create the context with default value
const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// Provider component
export const DeviceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDevice = (): DeviceContextType => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
};
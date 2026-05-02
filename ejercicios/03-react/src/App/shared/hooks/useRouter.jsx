import { useState, useEffect, useCallback } from "react";
// Definimos un nombre de evento constante para evitar errores de dedo
const EVENTS = {
  PUSHSTATE: "pushstate",
  POPSTATE: "popstate",
};

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Esta función se ejecuta cuando cambia la URL
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // 1. Escuchar navegación del navegador (Atrás/Adelante)
    window.addEventListener(EVENTS.POPSTATE, handleLocationChange);

    // 2. Escuchar nuestra navegación interna personalizada
    window.addEventListener(EVENTS.PUSHSTATE, handleLocationChange);

    return () => {
      window.removeEventListener(EVENTS.POPSTATE, handleLocationChange);
      window.removeEventListener(EVENTS.PUSHSTATE, handleLocationChange);
    };
  }, []);

  // Usamos useCallback para que esta función sea estable y no cause re-renders en hijos
  const navigateTo = useCallback((path) => {
    window.history.pushState({}, "", path);

    // Creamos y despachamos nuestro evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE);

    window.dispatchEvent(navigationEvent);
  }, []);

  return {
    currentPath,
    navigateTo,
  };
}

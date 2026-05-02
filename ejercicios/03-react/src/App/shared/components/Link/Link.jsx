import { useRouter } from "../../hooks/useRouter";
import "./assets/styles/link.css";

export default function Link({ target, href, children, ...restOfProps }) {
  const { navigateTo } = useRouter();

  const handleClick = (event) => {
    // 1. Detectar si se presionó alguna tecla modificadora (Meta/Cmd, Alt, Ctrl, Shift)
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

    // 2. Detectar si es un click izquierdo (button 0)
    const isMainEvent = event.button === 0;

    // 3. Verificar si el target es _self (o no existe), indicando navegación interna
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // SOLO prevenimos el default si cumplimos todas las condiciones de una SPA
      event.preventDefault();
      navigateTo(href);
    }
    // Si no se cumple (ej: Ctrl+Click), no hacemos nada y el navegador abre la nueva pestaña.
  };

  return (
    <a target={target} href={href} onClick={handleClick} {...restOfProps}>
      {children}
    </a>
  );
}

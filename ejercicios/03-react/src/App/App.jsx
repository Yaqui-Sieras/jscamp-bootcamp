import { useRouter } from "./shared/hooks/useRouter.jsx";
import "./styles/app.css";
import HeaderPrincipal from "./templates/HeaderPrincipal/HeaderPrincipal.jsx";
import Contenido from "./templates/Contenido/Contenido.jsx";
import Footer from "./templates/Footer/Footer.jsx";

export default function App() {
  const { currentPath } = useRouter();
  return (
    <>
      <HeaderPrincipal />
      <main>
        <Contenido path={currentPath} />
      </main>
      <Footer />
    </>
  );
}

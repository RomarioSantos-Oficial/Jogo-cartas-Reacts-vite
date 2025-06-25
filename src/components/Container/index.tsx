import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <section className={styles.container}>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </section>
  );
}

export default Container;

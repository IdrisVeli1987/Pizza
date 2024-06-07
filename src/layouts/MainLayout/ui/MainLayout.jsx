import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";
import { Header } from "@/Components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import { ModalItem } from "@/Components/ModalItem";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvier";

const MainLayout = () => {
  const { theme } = useTheme();

  const { isOpen, setIsOpen } = useContext(LayoutContext);
  return (
    <div id="app" className={`app ${theme}`}>
      <Header />
      <main className={cls.main}>
        <div className={cls.container}>
          <div className={cls.body}>
            <Navbar />

            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
      <ModalItem isOpen={isOpen} setIsOpen={setIsOpen } />
    </div>
  );
};

export { MainLayout };

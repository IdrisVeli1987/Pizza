import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";
import { Header } from "@/Components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";

const MainLayout = () => {
  const { theme } = useTheme();
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
      <Footer />{" "}
    </div>
  );
};

export { MainLayout };

import { useNavbarItemsList } from "@/utils/useNavbarItemsList";
import { NavbarItems } from "../NavbarItems/NavbarItems";
import cls from "./Navbar.module.scss";

const Navbar = () => {
  const navbarItemsList = useNavbarItemsList();

  const itemsList = () => {
    return navbarItemsList.map((item) => (
      <NavbarItems key={item.path} item={item} />
    ));
  };
  return <nav className={cls.navbar}>{itemsList}</nav>;
};

export { Navbar };

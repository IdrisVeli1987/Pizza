import { Link } from "react-router-dom";
import cls from "./NavbarItems.module.scss";
import { Icon } from "@/ui/Icon";

const NavbarItems = ({ item }) => {
  return (
    <Link to={item.path} className={cls.link}>
      <Icon Svg={item.Icon} />
      <span className={cls.text}>{item.text}</span>
    </Link>
  );
};

export { NavbarItems };

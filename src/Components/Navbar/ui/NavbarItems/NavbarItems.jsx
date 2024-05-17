import { AppLink } from "@/ui/AppLink";
import { Icon } from "@/ui/Icon";
import cls from "./NavbarItems.module.scss";

const NavbarItems = ({ item }) => {
  return (
    <AppLink activeClassName={cls.active} to={item.path} className={cls.link}>
      <Icon Svg={item.Icon} />
      <span className={cls.text}>{item.text}</span>
    </AppLink>
  );
};

export { NavbarItems };


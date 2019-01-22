import MenuLinkWithSub from "./MenuLinkWithSub";
import MenuLink from "./MenuLink";

const ParentMenu = props => {
  const { menu, menuItemSubClick, show } = props;

  return (
    <ul className={`level ${show || "primary"}`}>
      {menu.map(menuItem =>
        menuItem.hasOwnProperty("hasSubMenu") ? (
          <MenuLinkWithSub
            menu={menuItem}
            menuItemSubClick={menuItemSubClick}
          />
        ) : (
          <MenuLink menu={menuItem} />
        )
      )}
    </ul>
  );
};

export default ParentMenu;

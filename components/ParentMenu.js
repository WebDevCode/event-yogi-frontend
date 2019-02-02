import MenuLinkWithSub from "./MenuLinkWithSub";
import MenuLink from "./MenuLink";
import Link from "next/link";

const ParentMenu = props => {
  const { menu } = props;

  return (
    <div className="mobile-nav">
      {menu.map(menuItem => (
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              {menuItem.hasOwnProperty("hasSubMenu") &&
              menuItem.hasSubMenu == true ? (
                <p>{menuItem.name}</p>
              ) : (
                <Link href={menuItem.url}>
                  <a>{menuItem.name}</a>
                </Link>
              )}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <i className="material-icons">chevron_right</i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentMenu;

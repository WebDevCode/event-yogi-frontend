import Link from "next/link";

const ParentMenu = props => {
  const { menu, handleSubMenuClick, animated } = props;

  return (
    <ul className={`mobile-nav ${animated}`}>
      {menu.map(menuItem =>
        menuItem.hasOwnProperty("hasSubMenu") && menuItem.hasSubMenu == true ? (
          <li
            className="level is-mobile"
            key={menuItem.id}
            onClick={handleSubMenuClick(menuItem)}
          >
            <div className="level-item">
              <p>{menuItem.name}</p>
            </div>
            <div className="level-right">
              <div className="level-item">
                <i className="material-icons">chevron_right</i>
              </div>
            </div>
          </li>
        ) : (
          <li className="level is-mobile" key={menuItem.id}>
            <div className="level-item">
              <Link href={menuItem.url}>
                <a>{menuItem.name}</a>
              </Link>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default ParentMenu;

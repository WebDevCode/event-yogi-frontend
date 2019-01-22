import Link from "next/link";

const MenuLinkWithSub = props => {
  const { name, subMenu, url } = props.menu;

  return (
    <li className="level-item" key={name}>
      <Link href={url}>
        <a>{name}</a>
      </Link>
      <button onClick={props.menuItemSubClick(name, subMenu)}>
        <i className="material-icons">chevron_right</i>
      </button>
    </li>
  );
};
export default MenuLinkWithSub;

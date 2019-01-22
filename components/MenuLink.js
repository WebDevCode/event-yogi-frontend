import Link from "next/link";

const MenuLink = props => (
  <li className="level-item">
    <Link href={props.menu.url}>
      <a>{props.menu.name}</a>
    </Link>
  </li>
);

export default MenuLink;

import Link from "next/link";

const Navbar = props => (
  <nav className="navbar is-hidden-mobile">
    <ul className="level is-mobile container">
      <li className="level-item">
        <Link href="/category/wedding">
          <a>Wedding</a>
        </Link>
      </li>
      <li className="level-item">
        <Link href="/category/birthday">
          <a>Birthday</a>
        </Link>
      </li>
      <li className="level-item">
        <Link href="/category/party">
          <a>Party</a>
        </Link>
      </li>
      <li className="level-item">
        <Link href="/category/corporate">
          <a>Corporate Events</a>
        </Link>
      </li>
      <li className="level-item">
        <Link href="/category/festivals">
          <a>Festivals</a>
        </Link>
      </li>
      <li className="level-item">
        <Link href="/category/public">
          <a>Public Events</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

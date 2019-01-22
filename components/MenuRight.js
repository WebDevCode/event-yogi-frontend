import Link from "next/link";

class MenuRight extends React.Component {
  state = {
    windowWidth: 0
  };

  handleResize = e => this.setState({ windowWidth: window.innerWidth });

  componentDidMount = () => {
    window.addEventListener("load", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.handleResize);
    window.removeEventListener("resize", this.handleResize);
  };

  render() {
    return (
      <div className="menu-right">
        <ul>
          <li>
            <Link href="/vendor-signup">
              <a className="menu-right-links">
                {this.state.windowWidth >= 0 && this.state.windowWidth <= 545
                  ? "Vendors"
                  : "Become a Vendor"}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a
                className={
                  this.state.windowWidth > 0 && this.state.windowWidth < 545
                    ? "is-hidden"
                    : "menu-right-links"
                }
              >
                Register
              </a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a className="menu-btn">Sign In</a>
            </Link>
          </li>
          <div className="cart">
            <Link href="/cart">
              <a>
                <span className="cart-count-outer">
                  <span className="cart-count-inner">44</span>
                </span>
                <i className="material-icons">shopping_carts</i>
              </a>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default MenuRight;

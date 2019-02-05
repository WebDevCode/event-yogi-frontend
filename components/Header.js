import Link from "next/link";
import logo from "../static/logo.svg";
import HomeSearch from "./HomeSearch";
import HomeSearchResult from "./HomeSearchResult";
import MenuRight from "./MenuRight";
import MobileMenuIcon from "./MobileMenuIcon";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = props => (
  <header>
    <div className="container">
      <MobileMenuIcon open={props.open} menuClick={props.handleMenuClick} />
      <div className="logo">
        <Link href="/">
          <img src={logo} alt="Event Yogi Home" />
        </Link>
      </div>
      <div className="home-search">
        <HomeSearch />
        <HomeSearchResult />
      </div>
    </div>
    <MenuRight />
  </header>
);

export default Header;

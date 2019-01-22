import React, { Fragment } from "react";
import Meta from "./Meta";
import Header from "./Header";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

class Page extends React.Component {
  state = {
    isMenuOpen: false
  };

  handleMenuClick = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isMenuOpen: !this.state.isMenuOpen
    });
    e.stopPropagation();
  };

  render() {
    return (
      <Fragment>
        <Meta />
        <Header
          open={this.state.isMenuOpen}
          handleMenuClick={this.handleMenuClick}
        />
        <MobileMenu
          isOpen={this.state.isMenuOpen}
          menuClick={this.handleMenuClick}
        />
        <Navbar />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Page;

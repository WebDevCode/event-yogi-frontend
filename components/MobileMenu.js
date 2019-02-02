import ParentMenu from "./ParentMenu";

class MobileMenu extends React.Component {
  state = {
    menu: [
      {
        name: "Home",
        url: "/order"
      },
      {
        name: "Order",
        url: "/orders",
        hasSubMenu: true,
        subMenu: [
          {
            name: "Status",
            url: "/status"
          },
          {
            name: "Cart",
            url: "/cart"
          }
        ]
      }
    ]
  };

  handleContainerClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    return (
      <div
        className={`mobile-menu-wrapper ${
          this.props.isOpen ? "active" : "inactive"
        }`}
        onClick={this.props.handleMenuClick}
      >
        <div
          className={`mobile-menu ${
            this.props.isOpen ? "active slideUp" : "inactive slideDown"
          }`}
          onClick={this.handleContainerClick}
        >
          <div className="mobile-menu-header level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <i className="material-icons">chevron_left</i>
              </div>
            </div>
            <div className="level-item">
              <p>Browse Categories</p>
            </div>
            <div className="level-right" onClick={this.props.handleMenuClick}>
              <div className="level-item">
                <i className="material-icons">close</i>
              </div>
            </div>
          </div>
          <ParentMenu menu={this.state.menu} />
        </div>
      </div>
    );
  }
}

export default MobileMenu;

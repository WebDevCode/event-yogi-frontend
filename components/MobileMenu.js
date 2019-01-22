import ParentMenu from "./ParentMenu";

class MobileMenu extends React.Component {
  state = {
    menu: {
      menuTitle: "Browse Categories",
      prevTitle: "",
      menuTree: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Register",
          url: "/register",
          hasSubMenu: true,
          subMenu: [{ name: "Another Route", url: "/another" }]
        },
        {
          name: "User",
          url: "/user",
          hasSubMenu: true,
          subMenu: [
            {
              name: "Orders",
              url: "/orders",
              hasSubMenu: true,
              subMenu: [
                {
                  name: "Track",
                  url: "/track"
                },
                {
                  name: "Account",
                  url: "/account"
                }
              ]
            },
            {
              name: "Logout",
              url: "/logout"
            }
          ]
        }
      ]
    },
    activeSubMenu: [],
    previousMenu: []
  };

  handleContainerClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleBackClick = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      activeSubMenu: this.state.previousMenu,
      previousMenu: [],
      menu: {
        ...this.state.menu,
        menuTitle: this.state.menu.prevTitle,
        prevTitle: "Browse Categories"
      }
    });
  };

  menuItemSubClick = (name, subMenu) => e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      previousMenu: this.state.activeSubMenu,
      activeSubMenu: subMenu,
      menu: {
        ...this.state.menu,
        prevTitle: this.state.menu.menuTitle,
        menuTitle: name
      }
    });
    e.stopPropagation();
  };

  render() {
    return (
      <div
        className={`mobile-menu ${this.props.isOpen ? "active" : "inactive"}`}
        onClick={this.props.menuClick}
      >
        <div className="container" onClick={this.handleContainerClick}>
          <div className="level is-mobile mobile-menu-header">
            {this.state.previousMenu.length > 0 ||
            this.state.activeSubMenu.length > 0 ? (
              <div className="level-left">
                <button className="level-item" onClick={this.handleBackClick}>
                  <i className="material-icons">chevron_left</i>
                </button>
              </div>
            ) : null}
            <div className="level-item">{this.state.menu.menuTitle}</div>
            <div className="level-right">
              <button className="level-item" onClick={this.props.menuClick}>
                <i className="material-icons">close</i>
              </button>
            </div>
          </div>

          {this.state.activeSubMenu.length > 0 ? (
            <ParentMenu
              show={
                this.state.previousMenu.length > 0 ? "level3Menu" : "level2Menu"
              }
              menu={this.state.activeSubMenu}
              menuItemSubClick={this.menuItemSubClick}
            />
          ) : (
            <ParentMenu
              show="primary"
              menu={this.state.menu.menuTree}
              menuItemSubClick={this.menuItemSubClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MobileMenu;

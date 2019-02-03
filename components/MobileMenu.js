import MobileParentMenu from "./MobileParentMenu";
import Menu from "./testmenu";

class MobileMenu extends React.Component {
  state = {
    menu: [],
    currentMenu: [],
    prevMenu: [],
    isTopLevel: true,
    isSecondLevel: false,
    isThirdLevel: false,
    animatedClass: ""
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      menu: Menu,
      currentMenu: Menu
    });
  }

  handleBackClick = e => {
    e.preventDefault();
    if (this.state.isSecondLevel) {
      this.setState({
        ...this.state,
        currentMenu: this.state.prevMenu,
        prevMenu: [],
        isTopLevel: !this.state.isTopLevel,
        isSecondLevel: !this.state.isSecondLevel,
        animatedClass: "slideFromLeft"
      });
    } else if (this.state.isThirdLevel) {
      this.setState({
        ...this.state,
        currentMenu: this.state.prevMenu,
        prevMenu: this.state.menu,
        isSecondLevel: !this.state.isSecondLevel,
        isThirdLevel: !this.state.isThirdLevel,
        animatedClass: "slideFromLeft2"
      });
    }

    e.stopPropagation();
  };

  handleSubMenuClick = item => e => {
    e.preventDefault();
    if (this.state.isSecondLevel) {
      this.setState({
        ...this.state,
        prevMenu: this.state.currentMenu,
        currentMenu: item.subMenu,
        isTopLevel: false,
        isSecondLevel: !this.state.isSecondLevel,
        isThirdLevel: !this.state.isThirdLevel,
        animatedClass: "slideFromRight2"
      });
    } else {
      this.setState({
        ...this.state,
        currentMenu: item.subMenu,
        prevMenu: this.state.menu,
        isTopLevel: !this.state.isTopLevel,
        isSecondLevel: !this.state.isSecondLevel,
        animatedClass: "slideFromRight"
      });
    }
    e.stopPropagation();
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
        >
          <div className="mobile-menu-header level is-mobile">
            <div className="level-left">
              <div className="level-item" onClick={this.handleBackClick}>
                <i className="material-icons">chevron_left</i>
              </div>
            </div>
            <div className="level-item" onClick={this.handleContainerClick}>
              <p>Browse Categories</p>
            </div>
            <div className="level-right" onClick={this.props.handleMenuClick}>
              <div className="level-item">
                <i className="material-icons">close</i>
              </div>
            </div>
          </div>
          <MobileParentMenu
            menu={this.state.currentMenu}
            handleSubMenuClick={this.handleSubMenuClick}
            animated={this.state.animatedClass}
          />
        </div>
      </div>
    );
  }
}

export default MobileMenu;

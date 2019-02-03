const Menu = [
  {
    name: "Home",
    url: "/",
    id: 1
  },
  {
    name: "Order",
    url: "/orders",
    id: 2,
    hasSubMenu: true,
    subMenu: [
      {
        name: "Status",
        url: "/status",
        id: 3,
        hasSubMenu: true,
        subMenu: [
          {
            name: "Track",
            url: "/track",
            id: 5
          }
        ]
      },
      {
        name: "Cart",
        url: "/cart",
        id: 4
      }
    ]
  }
];

export default Menu;

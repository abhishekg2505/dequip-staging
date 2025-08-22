import { ROUTES } from "./routes";

export const navLinks = [
  // {
  //   itemName: "Company",
  //   subMenu: [
  //     {
  //       subMenuName: "About",
  //       subMenuLink: ROUTES?.ABOUT,
  //     },
  //     {
  //       subMenuName: "Ecosystem",
  //       subMenuLink: ROUTES?.ECOSYSTEM,
  //     },
  //   ],
  // },
  {
    itemName: "Home",
    link: "/",
  },
  {
    itemName: "About",
    link: ROUTES?.ABOUT,
  },
  {
    itemName: "Apply",
    subMenu: [
      {
        subMenuName: "As Startup",
        subMenuLink: ROUTES?.APPLY,
      },
      {
        subMenuName: "As Mentor",
        subMenuLink: ROUTES?.MENTOR,
      },
      {
        subMenuName: "As Partner",
        subMenuLink: ROUTES?.PARTNER,
      },
    ],
  },
  {
    itemName: "Qnet",
    link: ROUTES?.QNET,
  },
  {
    itemName: "Contact",
    link: ROUTES?.CONTACT,
  },
];

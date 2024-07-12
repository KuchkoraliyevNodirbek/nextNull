import { nanoid } from "nanoid";

import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/user/profile";
//user
import UserAbout from "../pages/user/user-about";
import UserProfile from "../pages/user/user-profile";
import UserInfo from "../pages/user/user-info";
import UserAccount from "../pages/user/user-account";

export const routes = [
  {
    component: Home,
    id: nanoid(),
    path: "/", // Adding path for clarity
  },
  {
    component: About,
    id: nanoid(),
    path: "/about",
  },
];

export const userRoutes = [
  {
    component: Profile,
    id: nanoid(),
    path: "", // Assuming profile is the base path
  },
  {
    component: UserAbout,
    id: nanoid(),
    path: "user-about",
  },
  {
    component: UserProfile,
    id: nanoid(),
    path: "user-profile",
  },
  {
    component: UserInfo,
    id: nanoid(),
    path: "user-info",
  },
  {
    component: UserAccount,
    id: nanoid(),
    path: "user-account",
  },
];

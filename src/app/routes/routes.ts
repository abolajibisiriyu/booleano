import Home from "app/views/Home";
import Quiz from "app/views/Quiz";
import Results from "app/views/Results";

interface AppRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/quiz",
    component: Quiz,
    exact: true,
  },
  {
    path: "/results",
    component: Results,
    exact: true,
  },
];

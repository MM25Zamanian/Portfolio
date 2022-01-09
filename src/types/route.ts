import type { Route as RouteBase } from '@vaadin/router';

interface RB {
  path: string;
  redirect: string;
}

interface RouteIcon extends RB {
  icon?: string;
}

interface RouteLabel extends RB {
  label?: string;
}

interface RouteNavigation extends RB {
  show_in_nav?: boolean;
}

type Route = RouteBase | RouteNavigation | RouteLabel | RouteIcon;

export default Route;

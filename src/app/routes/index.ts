import { homeRoutes } from './home.routes';
import { resourcesRoutes } from './resources.routes';
import { contactRoutes } from './contact.routes';
import { careersRoutes } from './careers.routes';
import { protectedRoutes } from './protected.routes';

export const routes = {
  ...homeRoutes,
  ...resourcesRoutes,
  ...contactRoutes,
  ...careersRoutes,
  ...protectedRoutes,
}; 
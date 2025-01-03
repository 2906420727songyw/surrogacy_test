import { homeRoutes } from './home.routes';
import { resourcesRoutes } from './resources.routes';
import { recommendationPlanRoutes } from './recommendation-plan.routes';
import { careersRoutes } from './careers.routes';
import { protectedRoutes } from './protected.routes';
import { authRoutes } from './auth.routes';

export const routes = {
  ...homeRoutes,
  ...resourcesRoutes,
  ...recommendationPlanRoutes,
  ...careersRoutes,
  ...protectedRoutes,
  auth: authRoutes,
}; 
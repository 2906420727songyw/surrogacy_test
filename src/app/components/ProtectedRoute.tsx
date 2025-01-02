'use client';

import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { routes } from '../routes';

const publicPaths = [
  '/pages/auth/login',
  '/pages/auth/register',
];

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push(routes.auth.login);
    return null;
  }

  return <>{children}</>;
} 
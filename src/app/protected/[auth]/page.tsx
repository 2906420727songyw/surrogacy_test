import { redirect } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';

export default function ProtectedPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <div>
      <h1>受保护的页面</h1>
      <p>只有登录后才能访问此页面</p>
    </div>
  );
} 
import ProtectedRoute from '../../components/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>受保护的页面</h1>
        <p>只有登录后才能访问此页面</p>
      </div>
    </ProtectedRoute>
  );
} 
import { Navigate } from 'react-router-dom';

export function ChatsPage() {
  return <Navigate to="/chats/waiting" replace />;
}

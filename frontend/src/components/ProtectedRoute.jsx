import { useAuthStore } from '../store/auth.store';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();
    
    if (!isAuthenticated || user?.role !== 'store_owner') {
        return <Navigate to="/login" />;
    }
    
    return children;
};
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Element, ...rest }) {
  const isLogged = useSelector(state => state.auth.isLogged);

  return isLogged ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/goit-project-react/login" />
  );
}

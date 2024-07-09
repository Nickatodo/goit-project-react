import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Header from './components/header/Header';
import Login from './components/loginPage/Login';
import Registration from './components/resgitrationPage/Registration';
import Home from './components/homePage/Home';
import UserDiary from './components/userDiary/UserDiary';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/goit-project-react/" element={<Home />} />
        <Route path="/goit-project-react/login" element={<Login />} />
        <Route
          path="/goit-project-react/registration"
          element={<Registration />}
        />
        <Route
          path="/goit-project-react/user-calculator"
          element={<ProtectedRoute element={Home} />}
        />
        <Route
          path="/goit-project-react/user-diary"
          element={<ProtectedRoute element={UserDiary} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

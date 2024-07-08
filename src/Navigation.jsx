import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import App from './components/App';
import Login from './components/loginPage/Login';
import Registration from './components/resgitrationPage/Registration';
import Home from './components/homePage/Home';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="goit-project-react/" element={<Home />}></Route>
        <Route path="goit-project-react/login" element={<Login />}></Route>
        <Route path="goit-project-react/contacts" element={<App />}></Route>
        <Route
          path="goit-project-react/registration"
          element={<Registration />}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RestrictedRoute component={HomePage} />} />
        <Route path="/register" element={<RestrictedRoute component={RegistrationPage} />} />
        <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
      </Routes>
    </Layout>
  );
};

export default App;





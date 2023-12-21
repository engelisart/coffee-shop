import Admin from 'pages/Admin';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

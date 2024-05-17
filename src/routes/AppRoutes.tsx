import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PageNotFound from '../pages/Errors/PageNotFound';
import CountryList from '../pages/CountryList/CountryList';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<CountryList />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// feature - pages
import Dashboard from './feature/dashboard/Dashboard';
// import Menu from './feature/menu/Menu';
import Main from './components/layout/Main';
import Order from './feature/order/Order';
import SkelMenuPage from './components/skeleton/pages/SkelMenuPage';
import PageNotFound from './feature/notfound/PageNotFound';

// lazy component
const Menu = React.lazy(() => import('./feature/menu/Menu'));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/menu"
            element={
              <React.Suspense fallback={<SkelMenuPage />}>
                <Menu />
              </React.Suspense>
            }
          />
          <Route path="/order">
            <Route index element={<Order />} />
            <Route
              path="factur"
              element={
                <Main>
                  <h1>Halo</h1>
                </Main>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

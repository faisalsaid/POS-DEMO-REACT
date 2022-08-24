import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// feature - pages
import Dashboard from './feature/dashboard/Dashboard';
// import Menu from './feature/menu/Menu';
import Main from './components/layout/Main';

// lazy component
const Menu = React.lazy(() => import('./feature/menu/Menu'));

function App() {
  return (
    <>
      <Router>
        <Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/menu"
              element={
                <React.Suspense fallback={<>...Loading</>}>
                  <Menu />
                </React.Suspense>
              }
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;

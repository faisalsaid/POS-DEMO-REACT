import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// feature - pages
import Dashboard from './feature/dashboard/Dashboard';
import Menu from './feature/menu/Menu';
import Main from './components/layout/Main';
import Order from './feature/order/Order';

function App() {
  return (
    <>
      <Router>
        <Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// feature - pages
import Dashboard from './feature/dashboard/Dashboard';
import Menu from './feature/menu/Menu';
import Main from './components/layout/Main';
import Order from './feature/order/Order';
import PageNotFound from './feature/notfound/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

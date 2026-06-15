import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceDetailsPage from './details.jsx';
import Main from './WrapTechRed';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Δυναμικό url που δέχεται το όνομα της υπηρεσίας */}
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}

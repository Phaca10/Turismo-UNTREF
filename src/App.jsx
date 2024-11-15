import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Consultas from './components/Consultas';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Redirigir automáticamente a /contacto */}
          <Route path="/" element={<Navigate to="/consultas" />} />
          {/* Ruta para el formulario de contacto */}
          <Route path="/consultas" element={<Consultas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;








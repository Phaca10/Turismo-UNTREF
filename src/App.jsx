import React from 'react';
import UserLogin from './components/UserLogin';
import FormRegister from './components/FormRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<FormRegister />} />
          <Route path="/" element={<UserLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './shared/routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;

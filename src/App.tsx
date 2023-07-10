
import './App.scss';
import AuthGuard from './components/authentication/AuthGuard';
import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
            <AuthGuard>
              <Home/>
            </AuthGuard>
          }
        />
        <Route 
          path="/login" 
          element={<Login /> }
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

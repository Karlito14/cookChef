import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header.js';
import { AuthProvider } from './components/AuthProvider/AuthProvider.js';
import { useEffect } from 'react';
import apiRecipes from './api/api-recipes.ts';
import { data } from './data/data.ts';


function App() {
  try {
    useEffect(() => {
      apiRecipes.postRecipes(data);
    }, []);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="app-container">
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

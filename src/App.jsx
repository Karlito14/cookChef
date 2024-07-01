import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import apiRecipes from './api/api-recipes.js';
// import { data } from './data/data.js';
// import { useEffect } from 'react';

function App() {
  // try {
  //   useEffect(() => {
  //     apiRecipes.postRecipes(data);
  //   }, []);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

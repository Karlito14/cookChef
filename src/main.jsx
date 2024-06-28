import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { AddRecipePage } from './pages/AddRecipePage/AddRecipePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form" element={<AddRecipePage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blogs } from './components/blogs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs/:id" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

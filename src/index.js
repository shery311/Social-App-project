import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from './Components/Context/darkModeContext';
import { AuthContextProvider } from './Components/Context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
      </AuthContextProvider>
      
    </DarkModeContextProvider>
    
  </React.StrictMode>
);

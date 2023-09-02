import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//2.1-IMPORTAR O PROVIDER:
import { ContadorContextProvider } from './context/ContadorContext';
import { CorTituloContextProvider } from './context/CorTituloContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderiza a aplicação:
root.render(
  <React.StrictMode>
    {/*2.2-USANDO O PROVIDER*/}
    <ContadorContextProvider>
      <CorTituloContextProvider>
        <App /> 
      </CorTituloContextProvider>
    </ContadorContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

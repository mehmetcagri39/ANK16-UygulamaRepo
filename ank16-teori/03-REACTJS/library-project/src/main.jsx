import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Home.jsx'
import './assets/style/index.css'
import { DataProvider } from './context/DataContext.jsx'
import { AuthProvider } from "./context/AuthContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <>    <AuthProvider>

  <DataProvider>
    <App />
    </DataProvider>
    </AuthProvider>
    ,
  </>
)

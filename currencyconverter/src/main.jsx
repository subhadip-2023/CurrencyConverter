import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const App = React.lazy(()=> App);
createRoot(document.getElementById('root')).render(
    <App />
)

import { createRoot } from 'react-dom/client'
import './index.css'
const App = React.lazy(()=> import('./App.jsx'));
createRoot(document.getElementById('root')).render(
    <App />
)

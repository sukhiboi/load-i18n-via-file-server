import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import "./i18n/i18n.ts";

const container = document.getElementById('root')!;
ReactDOM.createRoot(container).render(<App/>)

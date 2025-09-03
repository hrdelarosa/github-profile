import './index.css'
import { createRoot } from 'react-dom/client'
import Provider from './providers.tsx'
import App from './App.tsx'
import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import '@fontsource/be-vietnam-pro/700.css'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)

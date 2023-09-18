import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


function App() {


  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <RoutesApp />
        </Router>
      </ShoppingCartProvider>
    </>
  )
}

export default App

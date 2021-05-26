import useRoutes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Main.css'
function App() {

  const routes = useRoutes()
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;

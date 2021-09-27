import logo from './logo.svg';
import './App.css';
import Home from './Tabs/Home';
import Startup from './Tabs/Startup';
import Register from './Tabs/Register';

function App() {
  return (
    <div>
      <Home />
      <Startup />
      <Register />
    </div>
  );
}

export default App;

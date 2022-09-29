import './App.css';
import colors from './colors';
import Button from './components/button';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Button link="flow" title="flow"/>
      <Outlet/>
    </div>
  );
}

export default App;

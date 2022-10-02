import './App.css';
import colors from './components/colors';
import { Button } from './components/buttons';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Button link="flow" title="flow"/>
    </div>
  );
}

export default App;

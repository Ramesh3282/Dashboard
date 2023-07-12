
import './App.css';
import Buttons from './Components/Buttons';
import Dashboard from './Components/Dashboard';
import { Route,Routes } from 'react-router-dom';
import Cards from './Components/Cards';
import Tables from './Components/Tables';
import {data} from './Data/data';


function App() {
  return (
    <div className="App">
    
     
      <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/buttons' element={ <Buttons/>} />
          <Route path='/card' element={ <Cards/>} />
          <Route path='/table' element={ <Tables tableData={data}/>} />
        </Routes>
    </div>
  );
}

export default App;

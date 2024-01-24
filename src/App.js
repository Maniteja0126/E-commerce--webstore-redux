import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {Main , FilteredProduct} from './Components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/filteredProducts/:type' element={<FilteredProduct />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

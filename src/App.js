import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {Main , FilteredProduct, SingleProduct} from './Components'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main/>} />
        <Route path='/filteredProducts/:type' element={<FilteredProduct />} />
        <Route path='/filteredProducts/:type/:id' element={<SingleProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

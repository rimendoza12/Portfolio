import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import OnePage from './Components/pages/OnePage/OnePage';
import { Box } from '@mui/material';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<OnePage/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;

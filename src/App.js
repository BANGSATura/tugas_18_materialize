import React from 'react';
import SideNavComponent from './components/SideNavComponent.js';
import SliderComponent from './components/SliderComponent.js';
import CardComponent from './components/CardComponent.js';
import PaginationComponent from './components/PaginationComponent.js';

const App = ()=>{
  return(
    <>
      <SideNavComponent/>
      <SliderComponent/>
      <CardComponent/>
      <PaginationComponent/>
    </>
  );
}

export default App;

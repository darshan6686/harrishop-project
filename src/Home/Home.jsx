import React from 'react';
import Section1 from './Section1/Sec1';
import Section2 from './Section2/Sec2';
import Se3 from './Sectionn3/Se3';
import Section3 from './Section3/Sec3';
import Componet from './Compone/Componet'
// import store from '../Header/Store';
// import { Provider } from 'react-redux';

const Home = () => {
  return (
    <div>
      <Section1  />
      <Section2 />
        <Se3 />
      <Componet />
      <Section3 />
    </div>
  )
}

export default Home

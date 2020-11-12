import React from 'react';
import { Header, Footer } from './Layouts/Header/Header';
import Modal from './components/Modal/Modal';
import Routes from './Routes';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Routes />
        <Footer />
        <Modal />
      </div>
    )
  }
}

export default App;

import React from 'react';
import { Header, Footer } from './Layouts/Header/Header';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Notes />
        <Footer />
        <Modal />
      </div>
    )
  }
}

export default App;

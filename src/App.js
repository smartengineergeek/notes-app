import React from 'react';
import { Header, Footer } from './Layouts/Header/Header';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="notes"></div>
        <Footer />
      </div>
    )
  }
}

export default App;

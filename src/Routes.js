import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route
} from 'react-router-dom';

import Notes from './components/Notes/Notes';
import Create from './components/Create/Create';
import { Header, Footer } from './Layouts/Header/Header';
import Modal from './components/Modal/Modal';

export default function Routes(){
    return(
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Notes />
                </Route>
                <Route exact path="/create">
                    <Create />
                </Route>
                <Route render={() => <div>404</div>} />
            </Switch>

            <Footer />
            <Modal />
        </Router>
    )
}
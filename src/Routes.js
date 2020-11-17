import React from 'react';
import { 
    HashRouter as Router, 
    Switch,
    Route
} from 'react-router-dom';

import Notes from './components/Notes/Notes';
import Create from './components/Create/Create';
import { Header, Footer } from './Layouts/Header/Header';
import Update from './components/Update/Update';

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
                <Route path="/update/:id">
                    <Update />
                </Route>
                <Route render={() => <div>404</div>} />
            </Switch>

            <Footer />
        </Router>
    )
}
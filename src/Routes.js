import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route
} from 'react-router-dom';

import Notes from './components/Notes/Notes';
import Create from './components/Create/Create';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Notes />
                </Route>
                <Route exact path="/create">
                    <Create />
                </Route>
                <Route render={() => <div>404</div>} />
            </Switch>
        </Router>
    )
}
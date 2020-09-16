import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AllUsers from './components/AllUsers';
import SearchUser from './components/SearchUser';
import { getAllUsers } from './services';

const App = () => {

    const [user,setUser] = useState([]);
    const [filter,setFilter] = useState('')

    useEffect(() => {
        getAllUsers().then(res => {
            setUser(res.data.data);
        })
    },[])

    return (
        <>
        <Router>
            <nav>
                <Link to="/">First page</Link>
                <Link to="/search">Second page</Link>
            </nav>
        
            <Switch>
                <Route exact path="/" > 
                    <AllUsers user={user} />
                </Route>
                <Route path="/search">
                    <SearchUser filter={filter} setFilter={setFilter} user={user} />
                </Route>
            </Switch>
        
        </Router>
        </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


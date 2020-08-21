import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Main} from './components/Main/Main';
import {PageNotFound} from './components/PageNotFound/PageNotFound';
import {homeURL} from './helper';

function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() =>{
//     const session = getSession();
//     if(!session){
//         // history.push(homeURL + '/Login');
        
//     }
// }, []);

  return (
    <BrowserRouter>
      <Switch>
            <Route exact path= {"/"}> 
              <Redirect to="/Main"/> 
            </Route> 
            <Route path= {"/Main"} component = {Main} />
            <Route path= {"/Login"} component = {Login} />
            <Route path={"/404"} component={PageNotFound} />
            <Redirect to={"/404"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

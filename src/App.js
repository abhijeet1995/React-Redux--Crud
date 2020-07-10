import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import AddEmployee from "./components/add-employee/AddEmployee";
import UpdateEmployee from "./components/update-employee/UpdateEmployee";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home}/>
           
            <Route exact path="/add-employee" component={AddEmployee}/>
            <Route exact path="/employees/:id" component={UpdateEmployee}/>
          </Switch>
        </Provider>
      </Router>

    </div>
  );
}

export default App;

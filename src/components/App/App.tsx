import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../Shared/Header/Header';
import { Footer } from '../Shared/Footer/Footer';

import { Api } from '../Route/Api/Api';
import { Home } from '../Route/Home/Home';

/*
* The main application component. Which renders any routes as well as the header and footer.
*/
export class App extends Component {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <Router>
        <Header/>
        <div className="container">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/api" element={<Api/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    );
  }
}

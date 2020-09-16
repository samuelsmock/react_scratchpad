import React from 'react';

import {
  BrowserRouter as Router,
 
} from "react-router-dom";

import './App.css';
import Menu from '../MenuBar/Menu';
import Head from '../Head/Head';
import Layout from "../Layout/Layout";



class App extends React.Component {
  render() {
    return (
    <body>
      
      <Router>
        <div className="all-contents">
          
         
          <nav>
            <div className = "sidebar">
              <Menu />
            </div>
          </nav>
          <main>   
            <div className = 'right-body'>
              <div className = "top-profile">
                <Head/>
              </div>
            
              <div className = "page">
                <Layout/>
              </div>  
            </div>                                                                                            
            
            
          </main>
        
          
        </div>
      </Router>
    </body>
    
  );
  }
}

export default App;

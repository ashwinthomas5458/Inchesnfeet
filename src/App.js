import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ComingSoon from './pages/ComingSoon';
import Project from './pages/Project';



function App() {
  const[pageLoad, setLoad] = useState(false);

  const [navActive, setNav] = useState(false);
  const [active,setActive] = useState(false);
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset>(window.innerHeight/3)){
    setActive(true);
    }
    else{
     setActive(false); 
    }
  });
  useEffect(()=>{
      setNav(active);
  },[active]);

  window.addEventListener('load',()=>{
    setLoad(true);
  });

  return (
    <Router>
    <Switch>
      <Route exact path="/" render={() => (<Home pageLoad ={pageLoad} navActive ={navActive}/>)}/>
      <Route exact path="/about" render={() => (<About pageLoad ={pageLoad} navActive ={navActive}/>)}/>
      <Route exact path="/portfolio" render={() => (<Portfolio pageLoad ={pageLoad} navActive ={navActive}/>)}/>
      <Route exact path="/services" render={() => (<Services pageLoad ={pageLoad} navActive ={navActive}/>)}/>
      <Route exact path="/products" component={ComingSoon}/>
      <Route exact path="/blog" component={ComingSoon}/>
      <Route exact path="/contact" component={ComingSoon}/>
      <Route path="/portfolio/:id" render={({match}) => (<Project pageLoad ={pageLoad} navActive ={navActive} match={match}/>)}/>
    </Switch>
    </Router>
    
  );
}

export default App;

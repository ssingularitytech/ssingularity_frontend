import React, {useEffect} from 'react';
import Home from './pages/Home';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ComingSoon from './pages/coming-soon/ComingSoon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Courses from './pages/courses/Courses';
import Privacy from './components/Privacy/Privacy';
import Cancellation from './components/Cancellation/Cancellation';
import Shipping from './components/Shipping/Shipping';
import Terms from './components/Terms/Terms';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);
  return (
    <Router>   
    <div className="App">
     
    </div>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/technology"><ComingSoon/></Route>
      <Route path="/design"><ComingSoon/></Route>
      <Route path="/content"><ComingSoon/></Route>
      <Route path="/videos"><ComingSoon/></Route>
      <Route path="/voice-overs-translations"><ComingSoon/></Route>
      <Route path="/courses"><Courses/></Route>
      <Route path="/privacy"><Privacy/></Route>
      <Route path="/Cancellation"><Cancellation/></Route>
      <Route path="/Shipping"><Shipping/></Route>
      <Route path="/terms"><Terms/></Route>
      </Switch>
    </Router>
  );
}

export default App;

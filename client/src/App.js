import './App.css';
import Landing from './components/landing'
import Home from './components/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

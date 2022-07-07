import './App.css';
import Landing from './components/landing'
import Home from './components/home';
import Form from './components/creation'
import Detail from './components/details';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/creation' component={Form}/>
      <Route path='/home/:id' component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

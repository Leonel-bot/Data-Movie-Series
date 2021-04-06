import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import NavBar from './components/navbar/navbar';
import Show from './pages/show/show';
import Media from './pages/media/media';
import Footer from './components/footer/footer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:id/:mediaType' component={Show}/>
        <Route path='/genres/:genres_name/:genres_id' component={Home}/>
        <Route exaxt path='/:mediaType' component={Media}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

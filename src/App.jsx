import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import Films from './pages/Films'
import FilmDetails from './pages/FilmDetails'
import People from './pages/People'

// Components 
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:films">
                    <FilmDetails />
                </Route>

                <Route exact path="/people">
                    <People />
                </Route>
            </Switch>
        </BrowserRouter>
        // <div>
        //     <Header />
        //     <h1>Hello From App Component!</h1>
        // </div>
    )
}

export default App;
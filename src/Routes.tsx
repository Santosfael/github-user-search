import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/home';
import Search from './pages/Search';

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
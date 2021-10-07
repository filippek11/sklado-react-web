import { Route, Switch } from "react-router";
import Home from "./app/pages/Home";
import Products from "./app/pages/Products";
import New from "./app/pages/New"

const MainRouter = () => {
    
    
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/new" component={New}/>
        </Switch>
    )
};

export default MainRouter;
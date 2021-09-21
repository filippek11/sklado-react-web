import { Route, Switch } from "react-router";
import Home from "./app/pages/Home";
import Products from "./app/pages/Products";

const MainRouter = () => {
    
    
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
        </Switch>
    )
};

export default MainRouter;
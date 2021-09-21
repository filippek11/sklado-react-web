import { Route, Switch } from "react-router";
import Home from "./app/pages/Home";

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    )
};

export default MainRouter;
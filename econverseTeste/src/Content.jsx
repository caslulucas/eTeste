import { Router, Switch } from "react-router-dom";

export function Content () {
    return (
        <Switch>
            <Router exact path='/' />
        </Switch>
    )
}
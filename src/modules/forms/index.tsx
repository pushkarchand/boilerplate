import {Route} from "react-router-dom";
import Landing from './landing';
import Tempate from './template'
import Reactive from "./reactive";
export default function FormsLanding() {
    return (
        <>
        <h3>Forms</h3>
        <Landing/>
        <Route  path={'/forms/template'} component={Tempate} />
        <Route  path={'/forms/reactive'} component={Reactive} />
    </>
    )
}

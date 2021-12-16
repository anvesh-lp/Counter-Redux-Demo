import Counter from './components/Counter';
import {useSelector} from "react-redux";
import {Fragment} from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {

    const isLogin = useSelector((state) => state.auth.isAuthenticated)


    return (
        <Fragment>
            <Header/>
            {!isLogin && <Auth/>}
            {isLogin && <UserProfile/>}
            {isLogin && <Counter/>}
        </Fragment>
    );
}

export default App;

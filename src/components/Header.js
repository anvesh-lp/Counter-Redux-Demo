import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authenticationAction} from "../store/reduerStore";

const Header = () => {
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.auth.isAuthenticated)
    const logoutHandler = () => {
        dispatch(authenticationAction.logout())
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isLogin && (<nav>
                <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>)}

        </header>
    );
};

export default Header;

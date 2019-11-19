import React, { useContext } from 'react';
import AuthContext from '../components/auth-context';

const Header = props => {
    const auth = useContext(AuthContext);
    return <header>
        {auth.status ? <button className="btn btn-link" onClick={props.onLoadTodoes}>Todo List</button> : null}
        <button className="btn btn-link" onClick={props.onLoadAuth}>Auth</button>
    </header>
}

export default Header;
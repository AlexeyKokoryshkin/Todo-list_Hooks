import React from 'react';

const Header = props => {
    return <header>
        <button onClick={props.onLoadTodoes}>Todo List</button>
        <button onClick={props.onLoadAuth}>Auth</button>
    </header>
}

export default Header;
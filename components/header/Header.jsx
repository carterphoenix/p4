import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container Header"><div className="header">This is a header.</div><div className="gradient"></div></div>
        );
    }
}

export default Header;

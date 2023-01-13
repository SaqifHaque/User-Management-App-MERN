import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from "react-router-dom";

import logo from "../logo.svg";

const Header = styled(AppBar)`
        background: #51087E
`
const Tabs = styled(NavLink)`
        font-size: 20px;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        text-decoration: none;
        color:inherit;
    }
`
const Logo = styled('img')`
        height:50px;
        margin-right: 10px;
`

const Navbar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to="/"><Logo  src={logo} alt="logo" />Code Interview</Tabs>
                <Tabs to="/">Home</Tabs>
                <Tabs to="/add-user">Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;
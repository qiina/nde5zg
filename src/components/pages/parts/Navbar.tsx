import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const Nav = styled.nav`
        text-align: center;
        & ul {
            margin: 0;
            padding: 10px 0;
        }
    `;

    const Li = styled.li`
        list-style: none;
        display: inline-block;
        width: 18%;
        min-width: 90px;
        & a {
            text-decoration: underline;
            &:link, &:visited, &:hover, &:active {
                color: #000;
            }
        }
    `;

    return (
        <Nav>
            <ul>
                <Li><Link to="/">*</Link></Li>
                <Li><Link to="/second">-</Link></Li>
                <Li><Link to="/third">#</Link></Li>
            </ul>
        </Nav>
    );
}
export default Navbar;
import { FaArrowLeft } from 'react-icons/fa'

const styleNav = {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 30
}

const styleLink = {
    textDecoration: 'none',
    color: 'blue',
}

export const NavBar = () => (
    <div style={styleNav}>
        <a href='/' style={styleLink}><FaArrowLeft /></a>
    </div>
)
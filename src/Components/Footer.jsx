import { Link } from "react-router-dom"
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2021</p>
        <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
    </footer>
  )
}

export default Footer
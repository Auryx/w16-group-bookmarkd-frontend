import { Link } from "react-router-dom"

function Header(props) {
  return <div className="nav">
    <Link to="/">
      <div><h3>Bookmark'd App</h3></div>
    </Link>
  </div>
}

export default Header
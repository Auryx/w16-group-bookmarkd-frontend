import { Link } from "react-router-dom"

function Header(props) {
  return <div className="header">
    <Link to="/">
      <div>Bookmarks App</div>
    </Link>
  </div>
}

export default Header
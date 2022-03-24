import './Header.css'

function Header() {
  return (
    <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_inner_title">FCE exam with fun</div>
            <nav className="header_inner_nav">
              <ul className="header_inner_nav_list">
                <li className="header_inner_nav_list_item"><a href="#" className="header_inner_nav_list_item_link nav-item-active">Home</a></li>
                <li className="header_inner_nav_list_item"><a href="#" className="header_inner_nav_list_item_link">Dictionary</a></li>
                <li className="header_inner_nav_list_item"><a href="#" className="header_inner_nav_list_item_link">Tests</a></li>
                <li className="header_inner_nav_list_item"><a href="#" className="header_inner_nav_list_item_link">Articles</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header
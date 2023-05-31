import "./Header.scss"
  const Header = () => {

    return(
        <header className = "header"> 
          <div className = "header_container">
            <img className = "header_logo" src="/img/Logo.png" alt="logo de lalo muebles"></img>
            <nav className = "header_nav">
              <a classname = "header_link" href="#">Dormitorio</a>
              <a classname = "header_link" href="#">Cocina</a>
              <a classname = "header_link" href="#">Baño</a>
              <img src="/img/cart-fill.svg" alt="" />
              <p>0</p>
            </nav>
          </div>
         </header>
    )
}
export default Header
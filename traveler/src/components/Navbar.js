import { Component } from "react";
import "./NavbarStyle.css"
import { MenuItems } from './MenuItems'
import { Link } from "react-router-dom"

class Navbar extends Component{
  state={clicked:false};
  bamnut = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    //nav bar cua trang web
    return (
    <div className="Navbar_item">
      <h1 className="navbar_logo">Traveller</h1>

      <div className="menu-icons" onClick={this.bamnut}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={this.state.clicked?"navbar_menu active" : "navbar_menu"}>
        {
          MenuItems.map((item, index) => {
            return <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>{item.id}
                </Link>
              </li> 
          })
        } 
        <button>Sign Up</button>
      </ul>
    </div>
    )
  }
}

export default Navbar;
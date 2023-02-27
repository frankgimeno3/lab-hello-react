import IHLogo from '../images/ironhack-logo-xs.png';
import Menutop from '../images/menu-top-xs.png';


function Header() {
    return (
        <div className="App-header">
            <div className="toplogos">
                <img src={IHLogo} alt="IHLogo"/>
                <img src={Menutop} alt="menu"/>
            </div>
            
            <div className="leftalign">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn to use 
                    the most popular frontend library,
                    and become a super Ninja developer
                </p>
                <button type="button" className="btn btn-light ">Awesome!</button>
            </div>
        </div>
      
    );
  }
   
  export default Header;
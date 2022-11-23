
import NavBar from "./navBar";
import Main from "./main";
import Section from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

function Header() {
    
    return(
        <div className="header">
            <NavBar/>
            <Main/>
            <Section/>
            <Section2/>
            <Section3/>
        </div>
    );
}

export default Header;
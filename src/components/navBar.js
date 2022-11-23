
import '../css/nav.css';
function NavBar() {
    

    return(
        <div className ="row m-auto pt-3"  style={{backgroundColor:'#00C0FF'}}>
            {/* <div className ="col col-md-2"></div> */}
            <div className ="col col-md-6 text-end">
                <img className="" alt="" src="./images/logo.png" style={{ width:'400px', height:'150px'}}/>
            </div>
            <div className ="col col-md-6">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Développement</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
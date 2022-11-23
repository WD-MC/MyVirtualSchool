import '../css/section3.css';

function Section3() {

    return(
        
        <div className="section3 " style={{backgroundColor:'#00C0FF'}}>
            
            <div className="" style={{padding:'50px'}}>
                <div className="row bg-white" style={{borderRadius:'3px'}}>
                    <div className="col col-md-6">
                        <div className="cadre">
                            <div className="cadre1">
                                <img src="./images/me.jpg" alt=""/>
                                <h3>Lewis</h3>
                                <h5>Son poste ici</h5>
                            </div>
                            <div className="cadre1">
                                <img src="./images/me.jpg" alt=""/>
                                <h3>Michele</h3>
                                <h5>Son poste ici</h5>
                            </div>
                        </div>
                        <div className="cadre">
                            <div className="cadre1">
                                <img src="./images/me.jpg" alt=""/>
                                <h3>Lewis</h3>
                                <h5>Son poste ici</h5>
                            </div>
                            <div className="cadre1">
                                <img src="./images/me.jpg" alt=""/>
                                <h3>Michele</h3>
                                <h5>Son poste ici</h5>
                            </div>
                        </div>
                    </div>
                    <div className=" zone col col-md-6">
                        <h1>EQUIPE</h1>
                        <div className="cadre3">
                            <h4>
                                The href attribute requires a valid value to be accessible.
                                The href attribute requires a valid value to be accessible.
                                The href attribute requires a valid value to be accessible.
                                The href attribute requires a valid value to be accessible.
                            </h4>
                        </div>
                        <button>Rejoindre l'équipe</button>
                    </div>
                    
                </div>
            </div><br/><br/>

            <div className=" formData container" >
                <div className=" data text-center p-5">
                    <h1 className="text-start"><b>Contact</b></h1>
                    <h5 className="text-start">Lorem ipsum el dolor si amet</h5>
                    <form className="formd" method="GET">
                        <input type="text" className="form-control p-3 mt-5"  placeholder="Nom" required/>
                        <input type="email" className="form-control p-3 mt-5"  placeholder="Votre email" required/>
                        <textarea  className="form-control p-3 mt-5"  placeholder="Votre message" required></textarea>
                        <br/><br/>
                        <input type="submit" value="Envoyer" style={{ fontSize: '20px',color:'white',borderRadius: '7px',
                        backgroundColor: '#00C0FF',border: 'none',padding:'10px',width:'170px'}}/>
                    </form>
                </div>
            </div>

            <img className="card-img" src="./images/cadre abres2.png" alt="" style={{ marginTop:'-1020px'}}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col col-md-4">
                        <img className="" alt="" src="./images/logo.png" style={{ width:'400px', height:'150px'}}/>
                    </div>
                    <div className=" liens col col-md-4 ">
                        <h1>Liens rapides</h1><hr/>
                        <a href="">Accueil</a><br/>
                        <a href="">Développement</a><br/>
                        <a href="">Equipes</a><br/>
                        <a href="">Contact</a>
                    </div>
                    <div className=" liens col col-md-4">
                        <h1>NewsLetter</h1><hr/>
                        <input type="email" className="form-control p-3 mt-5"  placeholder="Votre email" required/>
                        <input type="submit" value="S'inscrire" style={{ fontSize: '20px',
                        color:'#00C0FF',border: 'none',padding:'7px',width:'170px'}}/>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
    
}

export default Section3;
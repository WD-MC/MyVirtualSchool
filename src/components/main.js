import '../css/main.css';
function Main() {
    
    return(

        <div className="main"  style={{backgroundColor:'#00C0FF'}}>
            <div className ="row m-auto">
                <div className="col col-md-7 text-center pt-2">
                    <img className="card-img" src="./images/Pub0 (2).png" alt=""/>
                </div>
                <div className="block col col-md-5">
                    <div className="description">
                        <p>Votre nouvel outil<br/>d'apprentissage <br/>en ligne</p><br/>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
            <div className="fondImage">
                <div className="fondBulle">
                    <img alt="" src="./images/Rectangle 3.png"/>
                </div>
                <div className="fondTexte">
                    <div className="imageTexte">
                        <div style={{position:'absolute',zIndex:'1'}}>
                            <img alt="" src="./images/StarRounded.png" style={{width:'370px', height:'370px'}}/>
                        </div>
                        <div style={{position:'absolute',top:'70px', left:'40px', zIndex:'2',fontSize:'50px', textAlign:'center',width:'300px'}}>
                            <b style={{color:'#00C0FF'}}>Jeux</b>
                            <h4>Le meilleur moyen</h4>
                            <h4>pour un enfant d'assimiler</h4>
                            <h4>de nouvelles notions</h4>
                            <button style={{width:'160px',fontSize:'20px',backgroundColor:'#828282',border:'none',borderRadius:'5px'}}>En savoir plus</button>
                        </div> 
                    </div>
                    <div className="imageTexte">
                        <div style={{position:'absolute',zIndex:'1'}}>
                            <img alt="" src="./images/StarRounded.png" style={{width:'370px', height:'370px'}}/>
                        </div>
                        <div style={{position:'absolute',top:'70px', left:'40px', zIndex:'2',fontSize:'50px', textAlign:'center',width:'300px'}}>
                            <b style={{color:'#00C0FF'}}>Activités</b>
                            <h4>Le meilleur moyen</h4>
                            <h4>pour un enfant d'assimiler</h4>
                            <h4>de nouvelles notions</h4>
                            <button style={{width:'160px',fontSize:'20px',backgroundColor:'#828282',border:'none',borderRadius:'5px'}}>En savoir plus</button>
                        </div> 
                    </div>
                    <div className="imageTexte">
                        <div style={{position:'absolute',zIndex:'1'}}>
                            <img alt="" src="./images/StarRounded.png" style={{width:'370px', height:'370px'}}/>
                        </div>
                        <div style={{position:'absolute',top:'60px', left:'40px', zIndex:'2',fontSize:'50px', textAlign:'center',width:'300px'}}>
                            <b style={{color:'#00C0FF'}}>Education</b>
                            <h4>Le meilleur moyen</h4>
                            <h4>pour un enfant d'assimiler</h4>
                            <h4>de nouvelles notions</h4>
                            <button style={{width:'160px',fontSize:'20px',backgroundColor:'#828282',border:'none',borderRadius:'5px'}}>En savoir plus</button>
                        </div> 
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Main;
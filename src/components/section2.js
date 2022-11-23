// style={{ backgroundImage: 'url("./images/Pub1.png ")', height:'800px', backgroundRepeat: 'no-repeat'}}

function Section2() {
    return(
        <div className="section2">

            {/* <div className="posi" >
                <div>
                    <img className="card-img" src="./images/fond.png" alt="" style={{position:'absolute', zIndex:'1'}}/>
                </div><br/><br/><br/>
                <div className="row " style={{position:'absolute', zIndex:'2',width:'1000px'}}>
                    <div className="col col-md-4"></div>
                    <div className="col col-md-6 p-2 text-center" style={{backgroundColor:'white'}}>
                        <h2>Découvres et apprends plein</h2>
                        <h2> de choses sur l'Afrique</h2>
                    </div>
                    <div className="col col-md-2"></div>
                    <div className="row pt-5">
                        <div className="col col-md-3"></div>
                        <div className="col col-md-9 text-white">
                            <h4 className="text-center">The href attribute requires a valid value to be accessible. Provide a valid, navigable address</h4>
                            <h4 className="text-center">The href attribute requires a valid value to be accessible.</h4>
                            <h4 className="text-center">valid, navigable address</h4>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="row " style={{position:'absolute', zIndex:'2',width:'1300px'}}>
                    <div className="col col-md-7"></div>
                    <div className="col col-md-4 p-3 text-center" style={{backgroundColor:'white'}}>
                        <h2>Connaissances, quêtes et</h2>
                        <h2>aventures</h2>
                    </div>
                    <div className="col col-md-1"></div>
                    <div className="row pt-5">
                        <div className="col col-md-6"></div>
                        <div className="col col-md-6 text-white">
                            <h4 className="text-center">The href attribute requires a valid value to be accessible.</h4>
                            <h4 className="text-center">The href attribute requires a valid value to be accessible. Provide a valid, navigable address</h4>
                            <h4 className="text-center">valid, navigable address</h4>
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <img className="card-img" src="./images/fond1.png" alt=""/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col col-md-6  text-center p-3">
                        <img src="./images/me.jpg" alt="" style={{width:'250px',height:'250px',borderRadius:'50%'}}/>
                        <h1>Fofetta Morelle</h1>
                        <h4>Initiatrice du projet</h4>
                    </div>
                    <div className="col col-md-6 text-start p-5 " style={{width:'510px',height:'360px',backgroundColor:'#00C0FF'}}>
                        <h2 className="text-white">My Virtual School</h2>
                        <h4 className="text" style={{textAlign:'justify'}}>
                            The href attribute requires a valid value to be accessible.
                            The href attribute requires a valid value to be accessible.
                            The href attribute requires a valid value to be accessible.
                            The href attribute requires a valid value to be accessible.
                        </h4>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Section2;
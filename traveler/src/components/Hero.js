import "./HeroStyle.css"

function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="MainImg" src={props.heroimg}/>
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.buturl} className={props.butclass}>{props.buttext}</a>
                </div>
            </div>
        </>
    )
}

export default Hero; 
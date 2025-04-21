import "./FooterStyle.css"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Traveller</h1>
                    <p>lựa chọn đúng đắn</p>
                </div>
                <div>
                    <a>
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a>
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a>
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">changelog</a>
                    <a href="/">Status</a>
                    <a href="/">Lincense</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Facebook</a>
                    <a href="/">Twiter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Trouble Shooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Lincense</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
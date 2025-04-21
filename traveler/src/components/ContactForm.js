import "./ContactFormStyle.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Hãy góp ý cho chúng tôi</h1>
            <form>
                <input placeholder="Tên"></input>
                <input placeholder="Email"></input>
                <input placeholder="Tiêu đề"></input>
                <textarea placeholder="Thông tin góp ý" rows="4"></textarea>
                <button>Gửi đóng góp</button>
            </form>
        </div>
    )
}

export default ContactForm
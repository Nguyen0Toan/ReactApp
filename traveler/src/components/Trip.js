import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../asserts/11.jpg"
import Trip2 from "../asserts/10.jpg"
import Trip3 from "../asserts/12.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Chuyến đi gần đây</h1>
            <p>Cùng chúng tôi khám phá những nơi bạn chưa đặt chân đến</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Buôn Ma Thuột"
                    text="Nơi đây có rừng núi, thác nước và vườn cà phê đẹp mắt. 
                    Du khách có thể trải nghiệm các hoạt động như đi bộ đường dài, 
                    leo núi, cắm trại và tham quan các khu bảo tồn thiên nhiên. 
                    Ngoài ra, Buôn Ma Thuột còn là nơi sản xuất cà phê nổi tiếng"
                />
                <TripData
                    image={Trip2}
                    heading="TP Hồ Chí Minh"
                    text=" là một điểm đến du lịch phổ biến. Du khách có thể khám 
                    phá các điểm tham quan như Nhà thờ Đức Bà, Công viên 23/9, Bảo 
                    tàng Chứng tích chiến tranh, hay tận hưởng ẩm thực đường phố đa 
                    dạng và phong phú"
                />
                <TripData
                    image={Trip3}
                    heading="Hà Nội"
                    text=" Du khách có thể tham quan các di tích lịch sử như Văn Miếu,
                     Hoàng Thành Thăng Long và Hồ Gươm, thưởng thức ẩm thực đường phố 
                     phong phú và trải nghiệm cuộc sống địa phương tại các khu phố cổ. 
                     Hà Nội cũng là cửa ngõ để khám phá các điểm du lịch lân cận như 
                     Hạ Long và Sa Pa"
                />
            </div>
        </div>
    );
}

export default Trip;
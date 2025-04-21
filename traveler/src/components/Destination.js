import Desimg1 from "../asserts/5.jpg"
import Desimg2 from "../asserts/6.jpg"
import Desimg3 from "../asserts/8.jpg"
import Desimg4 from "../asserts/9.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyle.css"

const Destination = () =>{
    return (
        <div className="destination">
            <h1>Địa điểm du lịch phổ biến</h1>
            <p>Các chuyến đi tạo cơ hội cho bạn khám phá các phong tục địa phương và ẩm thực nổi tiếng</p>
            <DestinationData
                name="first-des"
                heading="Nha Trang, Khánh Hòa"
                title="Nha Trang Khánh Hòa là một điểm đến du lịch nổi tiếng ở Việt Nam, 
                nơi có bãi biển xinh đẹp với cát trắng và nước biển trong xanh. 
                Đến đây, du khách có thể tận hưởng những hoạt động thú vị như lặn biển, 
                lướt sóng, chèo thuyền kayak và đi du thuyền. Ngoài ra, Nha Trang còn có 
                các điểm tham quan hấp dẫn như chùa Long Sơn, tháp Bà Ponagar và bảo tàng 
                Alexandre Yersin. Du lịch Nha Trang còn hấp dẫn bởi ẩm thực đặc sản của địa 
                phương như bún chả cá, nem nướng, chả cá lã vọng và hải sản tươi ngon"
                img1={Desimg1}
                img2={Desimg2}
            />
            <DestinationData
                name="first-des-reverse"
                heading="Hội An, Quảng Nam"
                title="Hội An Quảng Nam là một điểm đến du lịch hấp dẫn của Việt Nam, nơi 
                lưu giữ nhiều di sản văn hóa và kiến trúc độc đáo. Du khách có thể tham quan 
                các địa điểm nổi tiếng như Chùa Cầu, Nhà hàng Điện Dương, Cửa Đại và phố cổ 
                Hội An. Bên cạnh đó, Hội An còn có nhiều hoạt động thú vị như học làm bánh mì, 
                lồng đèn và tham gia các lễ hội truyền thống. Du lịch Hội An Quảng Nam sẽ đem 
                lại cho bạn những trải nghiệm tuyệt vời và kỷ niệm đáng nhớ."
                img1={Desimg3}
                img2={Desimg4}
            />
        </div>
    )
}

export default Destination;
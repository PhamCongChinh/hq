import type { NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import type { NextPageWithLayout } from '../../_app'


const Introduce: NextPageWithLayout = () => {
    return (
        <div className='p-5'>
            <div className="flex">
                    Năm 2016, hệ thống các sân bay lớn tại Việt Nam như Sân bay
                    Quốc tế Tân Sơn Nhất, Sân bay Quốc tế Nội Bài, Sân bay Quốc tế
                    Đà Nẵng, Sân bay Phú Quốc đều bị hacker tấn công và để lại nhiều
                    nội dung xúc phạm, xuyên tạc.
                    Cuối năm 2014, hệ thống các website của VCCorp cũng bị tấn công,
                    làm tê liệt hoạt động truy cập vào toàn bộ hệ thống website báo chí
                    đối tác của VCCorp và gây thiệt hại trực tiếp tới hoạt động của các
                    trang này, đồng thời ảnh hưởng tới hàng triệu độc giả và người tiêu
                    dùng sӱ dụng các dịch vụ trực tuyến của họ. Theo VCCorp, ước
                    tính sơ bộ sau hai ngày bị tấn công, số tiền VCCorp bị thiệt hại vào
                    khoảng 5 tӹ đồng, bao gồm tất cả các loại doanh thu như quảng
                    cáo, thương mại điện tӱ…
                    Trên thực tế, không ít nhӳng vụ tấn công mạng đã xảy ra liên tiếp tại
                    Việt Nam trong thời gian gần đây và để lại nhӳng hậu quả không hề
                    nhỏ. Nhӳng vụ việc như thế này đang gióng lên một hồi chuông
                    cảnh báo đối với các cá nhân cũng như doanh nghiệp trong thời đại
                    số. Với xu thế phát triển mạnh mẽ của cuộc cách mạng công nghiệp
                    4.0 trên toàn thế giới, trong đó có Việt Nam, sự bùng nổ của các
                    thiết bị IoT sẽ mang lại nhiều nguy cơ tiềm ẩn về các cuộc tấn công
                    trên không gian mạng hoặc bị kẻ xấu lợi dụng để tấn công vào các
                    hạ tầng.
                    </div>
        </div>
    )
}

Introduce.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Giới thiệu công ty">
            {page}
        </Layout>
    )
}

export default Introduce

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import content1Img from '../../img/content1.jpg';
import content2Img from '../../img/content2.jpg';
import comfortableRoomImg from '../../img/comfortableRoom.png';
import treatmentImg from '../../img/treatments.png';
import cuisineImg from '../../img/cuisine.png';
import facilities1Img from '../../img/facilities1.png';
import facilities2Img from '../../img/facilities2.png';
import treatments1 from '../../img/treatments1.png'
import treatments2 from '../../img/treatments2.png'
import homeImg from '../../img/home.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <div id='home'>
        <div className='header'>
          <div className='header-nav'>
            <Header />
          </div>
          <div className='header-bottom'>
            <Link to='/register'>
              <button className='btn-booking'>
                <FontAwesomeIcon icon={faCalendarDays} className='btn-booking__icon'/>
                <span className='btn-booking__title'>Đặt lịch</span>
              </button>
            </Link>
          </div>
          <div className='image-container'>
            <img src={homeImg} alt='Girl sitting at pool' className='header-image' />
          </div>
        </div>
        <div id='home-content'>
          <div className='home-service'>
            <div className='section-overview__title'>
              <p>Tất cả các loại phòng của chúng tôi đều bao gồm bữa sáng miễn phí!</p>
            </div>
            <div className='section-overview'>
              <div className='section-overview__content'>
                <div className='content-left'>
                  <h1 className='content-left__title'>Phòng nghĩ sang trọng</h1>
                  <span className='content-left__detail'>
                  Các phòng của chúng tôi được thiết kế để đưa bạn vào một môi trường dành cho việc thư giãn. Hãy gạt bỏ tâm trí của bạn khỏi cuộc sống gia đình hàng ngày và tìm một thiên đường riêng cho chính mình.
                  </span>
                  <a href='/rooms' className='explore-container'>
                    <button className='content-left__explore'>Khám phá</button>
                  </a>
                </div>
                <div className='content-right'>
                  <img src={content1Img} alt='Room' className='content-img' />
                </div>
              </div>
              <div className='section-overview__content'>
                <div className='content-left'>
                  <h1 className='content-left__title'>Hãy để những lo lắng của bạn trên cát</h1>
                  <span className='content-left__detail'>
                  Chúng tôi yêu cuộc sống ở bãi biển. Gần biển và có thể tiếp cận bãi biển đầy cát dài vô tận đảm bảo cho du khách một tâm trạng thoải mái. Dường như thời gian đang đứng yên ngắm nhìn đại dương.
                  </span>
                  <a href='/facilities' className='explore-container'>
                    <button className='content-left__explore'>Khám phá</button>
                  </a>
                </div>
                <div className='content-right'>
                  <img src={content2Img} alt='Beach' className='content-img' />
                </div>
              </div>
            </div>

            <div className='section-overview__service'>
              <p>CUNG CẤP DỊCH VỤ</p>
            </div>

            <div className='section-service'>
              <div className='service-left'>
                <div className='service-left__image'>
                  <img src={comfortableRoomImg} alt='Rooms' />
                </div>
                <div className='service-left__desc'>
                  <h1 className='service-middle__desc__title'>Phòng thư giãn</h1>
                  <p className='service-middle__desc__overview'>Sự thoải mái của bạn là mối quan tâm của chúng tôi</p>
                  <p className='service-middle__desc__overview'>Cải tạo mới mẻ</p>
                  <p className='service-middle__desc__overview'>Nhân viên thân thiện</p>
                </div>
              </div>
              <div className='service-middle'>
                <div className='service-middle__image'>
                  <img src={treatmentImg} alt='SPA' />
                </div>
                <div className='service-middle__desc'>
                  <h1 className='service-middle__desc__title'>ĐIỀU TRỊ SỨC KHỎE</h1>
                  <p className='service-middle__desc__overview'>Thư giản bằng vòi sen</p>
                  <p className='service-middle__desc__overview'>Nguồn nước tinh khiết</p>
                  <p className='service-middle__desc__overview'>Sức khỏe cho cả gia đình</p>
                </div>
              </div>
              <div className='service-right'>
                <div className='service-right__image'>
                  <img src={cuisineImg} alt='Cuisine' />
                </div>
                <div className='service-right__desc'>
                  <h1 className='service-middle__desc__title'>ẨM THỰC QUỐC GIA</h1>
                  <p className='service-middle__desc__overview'>Ngon</p>
                  <p className='service-middle__desc__overview'>Độc lạ</p>
                  <p className='service-middle__desc__overview'>Tốt cho sức khoẻ</p>
                </div>
              </div>
            </div>

            <div className='section-facilities'>
              <div className='section-facilities__container'>
                <div className='section-facilities__left'>
                  <img src={facilities1Img} alt='Cafe' className='facilities-1' />
                  <img src={facilities2Img} alt='Pool' className='facilities-2' />
                </div>
                <div className='section-facilities__right'>
                  <h1 className='facilities-title'>TIỆN ÍCH</h1>
                  <div className='facilities__desc'>
                    <p>Chúng tôi muốn kỳ nghỉ của bạn tại khách sạn sang trọng của chúng tôi thực sự khó quên. Đó là lý do tại sao chúng tôi đặc biệt quan tâm đến mọi nhu cầu của bạn để có thể đảm bảo mang lại trải nghiệm khá độc đáo.</p>
                  </div>
                  <div className='facilities__desc'>
                    <p>Các khách sạn sang trọng mang đến khung cảnh hoàn hảo với tầm nhìn tuyệt đẹp để giải trí và các tiện nghi nghỉ dưỡng sang trọng hiện đại của chúng tôi sẽ giúp bạn tận hưởng những điều tuyệt vời nhất.</p>
                  </div>
                  <div className='facilities__desc'>
                    <p>Đội ngũ nhân viên tại resort luôn sẵn sàng phục vụ khách hàng 24/7, từ đón khách tại sân bay, tư vấn lựa chọn phòng nghỉ, dịch vụ tốt nhất như ăn uống, giải trí và các tour du lịch. du lịch địa phương. Đồng thời, chúng tôi còn cung cấp các tour du lịch khám phá Thành phố Hồ Chí Minh xinh đẹp và khu vực lân cận.</p>
                  </div>
                  <a href='/facilities' className='facilities-btn'>
                    <button className='facilities-btn__explore'>Khám phá dịch vụ</button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className='treatments-section'>
              <div className='treatments-container'>
                <div className='treatments-content'>
                  <h1 className='treatments-title'>DỊCH VỤ ĐIỀU TRỊ VÀ THẨM MỸ</h1>
                  <div className='treatments-description'>
                    <p>Trong số nhiều phương pháp điều trị mang lại hiệu quả cao phải kể đến các dịch vụ như tắm bùn, vật lý trị liệu, phòng và điều trị các bệnh ngoài da, viêm xoang, bệnh gan. Và nhờ các chuyên gia của chúng tôi trong lĩnh vực thẩm mỹ, làn da của bạn sẽ trở nên mềm mại hơn da em bé.</p>
                  </div>
                  <div className='treatments-description'>
                    <p>Công việc được thực hiện ở đây quanh năm để mọi du khách đều được chú ý và ở trong một môi trường thuận lợi.</p>
                  </div>
                  <div className='treatments-description'>
                    <p>Đối với những người đi nghỉ và bệnh nhân của viện điều dưỡng, chúng tôi đã tạo ra và thường xuyên duy trì các điều kiện để mọi người cảm thấy trong một bầu không khí thân thiện và thoải mái.</p>
                  </div>
                  <div className='learn-more-container'>
                    <a href='/facilities' className='learn-more-link'>
                      <span>Xem thêm ➜</span>
                    </a>
                  </div>
                </div>
                <div className='treatments-images'>
                  <img src={treatments1} alt='Treatment 1' className='treatment-image' />
                  <img src={treatments2} alt='Treatment 2' className='treatment-image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

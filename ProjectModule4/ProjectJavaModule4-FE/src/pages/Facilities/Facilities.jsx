import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../layouts/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import './Facilities.css'
import Header from '../../layouts/Header/Header'
import facilities from '../../img/facilities.jpg'
import facilitiesgardenleft from '../../img/facilities-garden__left.jpeg'
import facilitiesgardenright from '../../img/facilities-garden__right.jpeg'
import facilitiesgardenright1 from '../../img/facilities-garden__right1.jpeg'
import facilitieshealth from '../../img/facilities-health.jpeg'
import facilitiespoolimg from '../../img/facilities-pool__left--content--img.png'
import facilitiespoolimg1 from '../../img/facilities-pool__left--item-img1.png'
import facilitiespoolimg2 from '../../img/facilities-pool__left--item-img2.png'
import facilitiespoolimg3 from '../../img/facilities-pool__left--item-img3.png'
import facilitiespoolimg4 from '../../img/facilities-pool__left--item-img4.png'
import facilitiespoolimgclub from '../../img/facilities-pool__mid--content--img.png'
import facilitiespoolimgclub1 from '../../img/facilities-pool__mid--item-img1.jpeg'
import facilitiespoolimgclub2 from '../../img/facilities-pool__mid--item-img2.png'
import facilitiespoolimgclub3 from '../../img/facilities-pool__mid--item-img3.jpeg'
import facilitiespoolimgclub4 from '../../img/facilities-pool__mid--item-img4.jpeg'
import facilitiespoolimgbonita from '../../img/facilities-pool__right--content--img.jpeg'
import facilitiespoolimgcarefullyhealth from '../../img/facilities-careffully-health-item__left-img.png'
import facilitiespoolimgcarefullyhealth1 from '../../img/facilities-careffully-health__left-item-img1.png'
import facilitiespoolimgcarefullyhealth2 from '../../img/facilities-careffully-health__left-item-img2.png'
import facilitiespoolimgcarefullyhealth3 from '../../img/facilities-careffully-health__left-item-img3.png'
import facilitiespoolimgcarefullyhealth4 from '../../img/facilities-careffully-health__left-item-img4.png'
import facilitiespoolimgcarefullyhealthtennis from '../../img/facilities-careffully-health__mid-content--img.png'
import facilitiespoolimgcarefullyhealthtennis1 from '../../img/facilities-careffully-health__mid-item-img1.png'
import facilitiespoolimgcarefullyhealthtennis2 from '../../img/facilities-careffully-health__mid-item-img2.png'
import facilitiespoolimgcarefullyhealthtennis3 from '../../img/facilities-careffully-health__mid-item-img3.png'
import facilitiespoolimgcarefullyhealthwellness from '../../img/facilities-careffully-health__right-content--img.png'
import facilitiespoolimgcarefullyhealthwellness1 from '../../img/facilities-careffully-health__right-item-img.jpeg'
import facilitiesplayclub1 from '../../img/facilities-play-club1.jpeg'
import facilitiesplayclub2 from '../../img/facilities-play-club2.jpeg'
import facilitiesplayclub3 from '../../img/facilities-play-club3.jpeg'
import facilitiesplayclub4 from '../../img/facilities-play-club4.jpeg'
import facilitiesplayclub5 from '../../img/facilities-play-club4.jpeg'


export default function Facilities() {
    const [isItemVisible, setIsItemVisible] = useState(false);
    const [isItemVisible1, setIsItemVisible1] = useState(false);

    
    const handleImageClick1 = () => {
        setIsItemVisible1(true);
    };

    const handleClose1 = () => {
        setIsItemVisible1(false);
    };
    const handleImageClick = () => {
        setIsItemVisible(true);
    };

    const handleClose = () => {
        setIsItemVisible(false);
    };
  return (
    <>
      <div id='facilities'>
        <div className='header'>
          <div className='header-nav'>
            <Header />
          </div>
          <div className='header-bottom'>
            <Link to='/register'>
              <button className='btn-booking'>
                <FontAwesomeIcon icon={faCalendarDays} className='btn-booking__icon' />
                <span className='btn-booking__title'>Đặt lịch</span>
              </button>
            </Link>
          </div>
          <div className='image-container'>
            <img src={facilities} alt='Facilities' className='header-image' />
          </div>
        </div>

        {/* FACILITY TITLE */}
        <div className='facilities-title'>
            <h1>TIỆN ÍCH ĐA NĂNG</h1>
            <p>Với đa dạng điểm đến giải trí, thư giãn trong nhà và ngoài trời ấn tượng vô vàn không gian</p>
            <p>dành riêng cho tất cả các thế hệt trong gia đình, sẵn sàng ghi dấu kỳ nghĩ ngập tràn cảm hứng</p>
            <p>cùng với LTD Resort DaNang</p>
        </div>


        {/*------------------------ FACILITY GARDEN ----------------------------------*/}
        <div className='facilities-garden'>
            <div className='facilities-garden__left'>
                <img src={facilitiesgardenleft} alt="" />
            </div>
            <div className='facilities-garden__right'>
                <img src={facilitiesgardenright} alt="" />
                <img src={facilitiesgardenright1} alt="" />
            </div>
        </div>


        {/*-------------------- FACILITY HEALTH ---------------------------------*/}
        <div className='facilities-health'>
            <div className='facilities-health__title'>
                <h1>TRUNG TÂM THỂ HÌNH</h1>
                <p>Phòng tập hiện đại với máy móc nhập khẩu từ Châu Âu, cho bạn</p>
                <p>nhiều sự lựa chọn đa dạng về loại hình tập luyện</p>
            </div>
            <div className='facilities-health__img'>
                <img src={facilitieshealth} alt="" />
            </div>
        </div>

        {/* --------------------------------FACILITY POOL------------------------------- */}
            <div className='facilities-pool-title'>
                <h1>HỒ BƠI</h1>
                <p>Hệ thống hồ bới ngoài trời ấn tượng bao gồm 4 bể lớn, 2 bể trẻ em</p>
                <p> và một bể sục jacuzzi được ôm trọn bởi hàng cây xanh mát là chốn</p>
                <p> dùng chân hoàn hảo cho những khảnh khắc nghỉ ngơi trọn vẹn</p>
            </div>
        <div className='facilities-pool'>


            {/*POOL LEFT*/}
            <div className='facilities-pool__left'>
                <div className='facilities-pool__left--content'>
                    <div className='facilities-pool__left--content--title'>
                    <p>ROYAL POOL</p>
                    </div>
                    <div className='facilities-pool__left--content--img' onClick={handleImageClick}>
                    <img src={facilitiespoolimg} alt="Royal Pool" />
                    </div>
                </div>

                {isItemVisible && (
                    <div className='facilities-pool__left--overlay'>
                        <button className='facilities-pool__left--close' onClick={handleClose}>X</button>
                        <div className='facilities-pool__left--item'>
                            <div className='facilities-pool__left--item-img'>
                            <img src={facilitiespoolimg1} alt="Pool 1" />
                            <img src={facilitiespoolimg2} alt="Pool 2" />
                            <img src={facilitiespoolimg3} alt="Pool 3" />
                            <img src={facilitiespoolimg4} alt="Pool 4" />
                            </div>
                            <div className='facilities-pool__left--item-title'>
                            <h1>HỒ BƠI THƯỢNG UYỂN</h1>
                            <div className='facilities-pool__left--item-title-content'>
                                <p>Hồ bơi với màu ngọc lục bảo thơ mộng, bao gồm bể bơi tràn bờ tuyệt đẹp, một bể bơi dài</p>
                                <p>nằm cạnh đài phun nước, một bể bơi trẻ em và sân tennis (miễn phí cho khách lưu trú</p>
                                <p>, có thu phí vào buổi tối)</p>
                            </div>
                            <p>Quầy bar kế bên sẵn sàng phụ vụ đồ uống để trải nghiệm thêm trọn vẹn</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>



            {/*POOL MIDDLE*/}
            <div className='facilities-pool__mid'>
                <div className='facilities-pool__mid--content'>
                    <div className='facilities-pool__mid--content--title'>
                        <p>BEACHCLUB POOL</p>
                    </div>
                    <div className='facilities-pool__mid--content--img' onClick={handleImageClick1}>
                        <img src={facilitiespoolimgclub} alt="" />
                    </div>
                </div>
                {isItemVisible1 && (
                    <div className='facilities-pool__mid--item'>
                    <div className='facilities-pool__mid--item-img'>
                        <button className='facilities-pool__left--close' onClick={handleClose1}>X</button>
                        <img src={facilitiespoolimgclub1} alt="" />
                        <img src={facilitiespoolimgclub2} alt="" />
                        <img src={facilitiespoolimgclub3} alt="" />
                        <img src={facilitiespoolimgclub4} alt="" />
                    </div>
                    <div className='facilities-pool__mid--item-title'>
                        <h1>HỒ BƠI THƯỢNG UYỂN</h1>
                        <div className='facilities-pool__mid--item-title-content'>
                            <p>Hồ bơi với màu ngọc lục bảo thơ mộng, bao gồm bể bơi tràn bờ tuyệt đẹp, một bể bơi dài</p>
                            <p>nằm cạnh đài phun nước, một bể bơi trẻ em và sân tennis (miễn phí cho khách lưu trú</p>
                            <p>, có thu phí vào buổi tối)</p>
                        </div>
                        <p>Quầy bar kế bên sẵn sàng phụ vụ đồ uống để trải nghiệm thêm trọn vẹn</p>
                    </div>
                </div>
                )}
            </div>

            {/*POOL RIGHT*/}
            <div className='facilities-pool__right'>
                <div className='facilities-pool__right--content'>
                    <div className='facilities-pool__right--content--title'>
                        <p>LA BONITA POOL</p>
                    </div>
                    <div className='facilities-pool__right--content--img'>
                        <img src={facilitiespoolimgbonita} alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* ---------------------CAREFFULY HEALTH------------------------ */}
        <div className='facilities-careffully-health'>
            <div className='facilities-careffully-health-title'>
                <h1>CHĂM SÓC SỨC KHOẺ</h1>
                <p>Đắm chìm trong liệu trình Spa thư thái, tái tạo năng lượng qua những</p>
                <p> giờ luyện tập tại sân Tennis hay trung tâm thể thao, vô vàn đặc quyền</p>
                <p> hấp dẫn nhằm nâng cao sức khoẻ đang chờ bạn trải nghiệm</p>
            </div>

            {/* CAREFULLY HEALTH  LEFT */}
            <div className='facilities-careffully-health__left'>
                <div className='facilities-careffully-health__left--content'>
                    <div className='facilities-careffully-health__left-content-title'>
                        <h1>IMPERIAL SPA</h1>
                    </div>
                    <div className='facilities-careffully-health__left-content--img'>
                        <img src={facilitiespoolimgcarefullyhealth} alt="" />
                    </div>  
                </div>
                <div className='facilities-careffully-health__left-item'>
                    <div className='facilities-careffully-health__left-item-img'>
                        <img src={facilitiespoolimgcarefullyhealth1} alt="" />
                        <img src={facilitiespoolimgcarefullyhealth2} alt="" />
                        <img src={facilitiespoolimgcarefullyhealth3} alt="" />
                        <img src={facilitiespoolimgcarefullyhealth4} alt="" />
                    </div>
                    <div className='facilities-careffully-health__left-item-title'>
                        <h1>IMPERIAL SPA</h1>
                        <div className='facilities-careffully-health__left-item-title-content1'>
                            <p>Tự hào là trung tâm chăm sóc sức khoẻ sang trọng hàng đầu Đà Nẵng, IMPERIAL Spa</p>
                            <p> là ốc đảo an yên, nơi bạn có thể tìm lại được sự cân bằng thân - tâm - trí qua các liệu trình</p>
                            <p> xong hơi, mát-xa và nhiều liệu pháp làm đẹp khác</p>
                        </div>
                        <div className='facilities-careffully-health__left-item-title-content2'>
                            <p>Cảm nhận sự bình yên và thư giãn trong không gian đậm phong cách La Mã tinh tế</p>
                            <p> cùng sự chăm sóc tận tình của chuyên viên lành nghề. Vui lòng đặt trước dịch vụ để</p>
                            <p> có những trải nghiệm tốt nhất</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CAREFULLY HEALTH  MID */}
            <div className='facilities-careffully-health__mid'>
                <div className='facilities-careffully-health__mid--content'>
                    <div className='facilities-careffully-health__mid-content-title'>
                        <h1>TENNIS COURT</h1>
                    </div>
                    <div className='facilities-careffully-health__mid-content--img'>
                        <img src={facilitiespoolimgcarefullyhealthtennis} alt="" />
                    </div>  
                </div>
                <div className='facilities-careffully-health__mid-item'>
                    <div className='facilities-careffully-health__mid-item-img'>
                        <img src={facilitiespoolimgcarefullyhealthtennis} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthtennis1} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthtennis2} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthtennis3} alt="" />
                    </div>
                    <div className='facilities-careffully-health__mid-item-title'>
                        <h1>SÂN CHƠI TENNIS</h1>
                        <div className='facilities-careffully-health__mid-item-title-content'>
                            <p>Sân chơi Tennis tiêu chuẩn được bao phủ bởi cây xanh là nơi vận động giữ dáng lý tưởng,</p>
                            <p> thoả sức thể hiện những đường bóng đẹp mắt qua những trận cầu đỉnh cao</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CAREFULLY HEALTH  RIGHT */}
            <div className='facilities-careffully-health__right'>
                <div className='facilities-careffully-health__right--content'>
                    <div className='facilities-careffully-health__right-content-title'>
                        <h1>WELLNESS CENTER</h1>
                    </div>
                    <div className='facilities-careffully-health__right-content--img'>
                        <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                    </div>  
                </div>
                <div className='facilities-careffully-health__right-item'>
                    <div className='facilities-careffully-health__right-item-img'>
                        <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthwellness1} alt="" />
                        <img src={facilitiespoolimgcarefullyhealthwellness1} alt="" />
                    </div>
                    <div className='facilities-careffully-health__right-item-title'>
                        <h1>Trung tâm chăm sóc sức khoẻ</h1>
                        <div className='facilities-careffully-health__right-item-title-content'>
                            <p>Không gian thoáng đãng riêng tư, trang thiết bị tập luyện hiện đại tiêu chuẩn 5 sao, đội</p>
                            <p> ngũ nhân viên nhiệt tình cùng ưu đãi hấp dẫn khi trở thành hội viên, không bao giờ là</p>
                            <p> quá muộn để nâng cao sức khoẻ, sức bền và sự dẻo daicaur bản thân mình tại LTD Resort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* KID'S PLAY CLUB */}
        <div className='facilities-play-club'>
            <img src={facilitiesplayclub1} alt="" />
            <img src={facilitiesplayclub2} alt="" />
            <img src={facilitiesplayclub3} alt="" />
            <img src={facilitiesplayclub4} alt="" />
            <img src={facilitiesplayclub5} alt="" />
        </div>

        {/* SERVICE DEPARTMENT */}
        <div className='facilities-service'>
            <div className='facilities-service-img'>
                <img src="" alt="" />
            </div>
            <div className='facilities-service-title'>
                <h1>PHÒNG DỊCH VỤ</h1>
                <div className='facilities-service-title-content'>
                    <p>Du khách sẽ tìm thấy các dịch vụ toàn</p>
                    <p> diện bao gồm photocopy, fax và máy</p>
                    <p> tính truy cập internet tốc độ cao. Các</p>
                    <p> phòng riêng cũng được trang bị tiện</p>
                    <p> nghi tổ chức hội họp và hội nghị. Đội</p>
                    <p> ngũ nhân viên chuyên nghiệp luôn sẵn sàng hỗ trợ.</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

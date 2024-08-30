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
    import facilitiespoolimgbonita1 from '../../img/facilities-pool__right--item-img1.jpeg'
    import facilitiespoolimgbonita2 from '../../img/facilities-pool__right--item-img2.jpeg'
    import facilitiespoolimgbonita3 from '../../img/facilities-pool__right--item-img3.jpeg'
    import facilitiespoolimgbonita4 from '../../img/facilities-pool__right--item-img4.jpeg'
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
    import servicecenter from '../../img/service-center.jpeg'




    export default function Facilities() {
        const [isItemVisible, setIsItemVisible] = useState(false);
        const [isItemVisible1, setIsItemVisible1] = useState(false);
        const [isItemVisible2, setIsItemVisible2] = useState(false);
        const [isItemVisible3, setIsItemVisible3] = useState(false);
        const [isItemVisible4, setIsItemVisible4] = useState(false);
        const [isItemVisible5, setIsItemVisible5] = useState(false);
        const handleImageClick5 = () => {
            setIsItemVisible5(true);
        };
        const handleClose5 = () => {
            setIsItemVisible5(false);
        };

        const handleImageClick4 = () => {
            setIsItemVisible4(true);
        };
        const handleClose4 = () => {
            setIsItemVisible4(false);
        };

        const handleImageClick3 = () => {
            setIsItemVisible3(true);
        };
        const handleClose3 = () => {
            setIsItemVisible3(false);
        };

        const handleImageClick2 = () => {
            setIsItemVisible2(true);
        };
        const handleClose2 = () => {
            setIsItemVisible2(false);
        };

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
                                <h1>HỒ BƠI HOÀNG GIA</h1>
                                <div className='facilities-pool__left--item-title-content'>
                                    <p>Giữa hai toà tháp là Royal Garden được thiết kế cảnh quan tuyệt đẹp, một</p>
                                    <p> ốc đảo xanh ngọc lục bảo dịu nhẹ và xanh lam rực rỡ của Địa Trung Hải,</p>
                                    <p>nơi có hồ bơi tự do tuyệt đẹp, hai bồn tắm nước nóng, hồ bơi dài nằm giữa</p>
                                    <p>khu vườn đài phun nước điêu khắc, hồ bới dành cho trẻ em và sân tennis</p>
                                    <p>(miễn phí cho khách lưu trú trong nhà vào ban ngày; áp dụng phí chơi vào</p>
                                    <p>ban đêm). Quầy bar hồ bơi có vọng lâu đảm bảo rằng bạn luôn có một</p>
                                    <p> thức uống giải khát ở gần.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>



                {/*POOL MIDDLE*/}
                <div className='facilities-pool__mid'>
                    <div className='facilities-pool__left-content'>
                        <div className='facilities-pool__mid--content--title'>
                            <p>BEACHCLUB POOL</p>
                        </div>
                        <div className='facilities-pool__mid--content--img' onClick={handleImageClick1}>
                            <img src={facilitiespoolimgclub} alt="" />
                        </div>
                    </div>
                    {isItemVisible1 && (
                        <div className='facilities-pool__mid--overlay'>
                            <button className='facilities-pool__mid--close' onClick={handleClose1}>X</button>
                            <div className='facilities-pool__mid--item'>
                                <div className='facilities-pool__mid--item-img'>
                                <img src={facilitiespoolimgclub1} alt="Pool 1" />
                                <img src={facilitiespoolimgclub2} alt="Pool 2" />
                                <img src={facilitiespoolimgclub3} alt="Pool 3" />
                                <img src={facilitiespoolimgclub4} alt="Pool 4" />
                                </div>
                                <div className='facilities-pool__mid--item-title'>
                                <h1>HỒ BƠI CÂU LẠC BỘ BÃI BIỂN</h1>
                                <div className='facilities-pool__mid--item-title-content'>
                                    <p>Đắm chìm trong vẻ đẹp vô biên tại khách sạn - làn nước trong xanh và</p>
                                    <p>biển lặng hay có thể là hoàng hôn lãng mạn, ranh giới giữa thiên nhiên</p>
                                    <p>và kiến trúc nhân tạo dường như mờ nhạt.</p>
                                    <p>Là khách sạn 5 sao duy nhất có bãi biển riêng tại Đà Nẵng, Khách sạn</p>
                                    <p>gây ấn tượng với du khách với hồ bơi vô cực như hoà vào đại dương.</p>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/*POOL RIGHT*/}
                <div className='facilities-pool__right'>
                    <div className='facilities-pool__left-content'>
                        <div className='facilities-pool__right--content--title'>
                            <p>LA BONITA POOL</p>
                        </div>
                        <div className='facilities-pool__right--content--img' onClick={handleImageClick2}>
                            <img src={facilitiespoolimgbonita} alt="" />
                        </div>
                    </div>
                    {isItemVisible2 && (
                        <div className='facilities-pool__right--overlay'>
                            <button className='facilities-pool__right--close' onClick={handleClose2}>X</button>
                            <div className='facilities-pool__right--item'>
                                <div className='facilities-pool__right--item-img'>
                                <img src={facilitiespoolimgbonita1} alt="Pool 1" />
                                <img src={facilitiespoolimgbonita2} alt="Pool 2" />
                                <img src={facilitiespoolimgbonita3} alt="Pool 3" />
                                <img src={facilitiespoolimgbonita4} alt="Pool 4" />
                                </div>
                                <div className='facilities-pool__right--item-title'>
                                <h1>HỒ BƠI ĐẸP</h1>
                                <div className='facilities-pool__right--item-title-content'>
                                    <p>Nếu bạn chỉ biết về hồ bơi ngoài trời rộng lớn của La Bonita, bạn cần cập nhật</p>
                                    <p>ngay vì những góc khác có thể cung cấp chô bạn hàng ngàn bức ảnh Isntagram.</p>
                                    <p>Tuyệt đẹp, riêng tư, thoải mái, mọi thứ bạn cần, chúng tôi đều có ở đây !</p>
                                    <p>Hãy đến và thư giãn đêm với hồ bơi ngoài trời tuyệt đẹp và thực đơn đồ uống</p>
                                    <p>và đồ ăn nhẹ phong phú.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>



            {/* ---------------------CAREFFULY HEALTH------------------------ */}
                <div className='facilities-careffully-health-title'>
                    <h1>CHĂM SÓC SỨC KHOẺ</h1>
                    <p>Đắm chìm trong liệu trình Spa thư thái, tái tạo năng lượng qua những</p>
                    <p> giờ luyện tập tại sân Tennis hay trung tâm thể thao, vô vàn đặc quyền</p>
                    <p> hấp dẫn nhằm nâng cao sức khoẻ đang chờ bạn trải nghiệm</p>
                </div>
            <div className='facilities-careffully-health'>
                {/* CAREFULLY HEALTH LEFT */}
                <div className='facilities-careffully-health__left'>
                    <div className='facilities-careffully-health__left--content'>
                        <div className='facilities-careffully-health__left-content-title'>
                            <h1>IMPERIAL SPA</h1>
                        </div>
                        <div className='facilities-careffully-health__left-content--img' onClick={handleImageClick3}>
                            <img src={facilitiespoolimgcarefullyhealth} alt="" />
                        </div>  
                    </div>
                    {isItemVisible3 && (
                        <div className='facilities-careffully-health__left--overlay'>
                            <button className='facilities-careffully-health__left--close' onClick={handleClose3}>X</button>
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
                    )}
                </div>

                {/* CAREFULLY HEALTH MID */}
                <div className='facilities-careffully-health__mid'>
                    <div className='facilities-careffully-health__mid--content'>
                        <div className='facilities-careffully-health__mid-content-title'>
                            <h1>TENNIS COURT</h1>
                        </div>
                        <div className='facilities-careffully-health__mid-content--img' onClick={handleImageClick4}>
                            <img src={facilitiespoolimgcarefullyhealthtennis} alt="" />
                        </div>  
                    </div>
                    {isItemVisible4 && (
                        <div className='facilities-careffully-health__mid--overlay'>
                            <button className='facilities-careffully-health__mid--close' onClick={handleClose4}>X</button>
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
                    )}
                </div>

                {/* CAREFULLY HEALTH RIGHT */}
                <div className='facilities-careffully-health__right'>
                    <div className='facilities-careffully-health__right--content'>
                        <div className='facilities-careffully-health__right-content-title'>
                            <h1>FITNESS ROOM</h1>
                        </div>
                        <div className='facilities-careffully-health__right-content--img' onClick={handleImageClick5}>
                            <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                        </div>  
                    </div>
                    {isItemVisible5 && (
                        <div className='facilities-careffully-health__right--overlay'>
                            <button className='facilities-careffully-health__right--close' onClick={handleClose5}>X</button>
                            <div className='facilities-careffully-health__right-item'>
                                <div className='facilities-careffully-health__right-item-img'>
                                    <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                                    <img src={facilitiespoolimgcarefullyhealthwellness1} alt="" />
                                    <img src={facilitiespoolimgcarefullyhealthwellness1} alt="" />
                                    <img src={facilitiespoolimgcarefullyhealthwellness} alt="" />
                                </div>
                                <div className='facilities-careffully-health__right-item-title'>
                                    <h1>PHÒNG TẬP GYM</h1>
                                    <div className='facilities-careffully-health__right-item-title-content'>
                                        <p>Phòng tập gym với trang thiết bị hiện đại, không gian rộng rãi,</p>
                                        <p>được thiết kế dành riêng cho những ai yêu thích rèn luyện sức khoẻ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* KID'S PLAY CLUB */}
            <div className='kid-club-title'>
                <h1>CÂU LẠC BỘ TRẺ EM</h1>
                <p>Một trải nghiệm ngoài trời đầy thú vị cho trẻ em với các hoạt</p>
                <p>động và trò chơi hất dẫn trong không gian được trang trí đẹp mắt</p>
                <p>mang đến cho tất cả trẻ em một thời gian khó quên. Hãy để con bạn </p>
                <p>đắm mình trong hố bóng nhiều màu sấc với niềm vui bất tận tại câu lạc bộ trẻ em.</p>
            </div>
            <div className="kid-club-img">
                    <img src={facilitiesplayclub1} alt="" />
                    <img src={facilitiesplayclub2} alt="" />
                    <img src={facilitiesplayclub3} alt="" />
                    <img src={facilitiesplayclub4} alt="" />
            </div>



            {/* SERVICE DEPARTMENT */}
            <div className='facilities-service'>
                <div className='facilities-service-img'>
                    <img src={servicecenter} alt="" />
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import roomheader from '../../img/room.jpg';
import roomheritage from '../../img/room-heritage-1.jpeg';
import roomtriple1 from '../../img/room-triple1.png';
import roomtriple2 from '../../img/room-triple2.jpeg';
import roomsuites1 from '../../img/room-suites1.jpeg';
import roomsuites2 from '../../img/room-suites2.jpeg';
import roomsuites3 from '../../img/room-suites3.jpeg';
import roomvip from '../../img/room-vip.jpeg';
import residence1 from '../../img/residence1.webp';
import residence2 from '../../img/residence2.png';
import roomgrand1 from '../../img/room-grand1.png';
import roomgrand2 from '../../img/room-grand2.webp';
import roomresidencesuites1 from '../../img/room-desidence-suites1.webp';
import roomresidencesuites2 from '../../img/room-desidence-suites2.jpeg';
import roomresidencesuites3 from '../../img/room-desidence-suites3.jpeg';
import roomresidencevip from '../../img/room-residence-vip.jpeg';

export default function Rooms() {
  const [currentRoomType, setCurrentRoomType] = useState('HERITAGE'); // Đặt mặc định là 'HERITAGE'

  const handleRoomTypeChange = (type) => {
    setCurrentRoomType(type); // Cập nhật loại phòng hiện tại
  };

  return (
    <>
      <div id='rooms'>
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
            <img src={roomheader} alt='roomheader' className='header-image' />
          </div>
        </div>

        {/* -------------------ROOM TITLE--------------------*/}
        <div className='room-title'>
          <h1>ROOMS</h1>
          <p>LTD Resort DaNang, một hình ảnh thu nhỏ của sự hùng vĩ hoàng gia, tự hào tiện nghi 5 sao, nội thất cổ điển,
            phòng tắm lát cẩm thạch và tầm nhìn mê hoặc ra khu vườn hoàng gia cũng như bãi biển riêng lãng mạn tạo nên một khung cảnh đầy nghệ thuật và xa hoa.</p>
        </div>

        {/*-------------------ROOM TYPE---------------------*/}
        <div id='room-type'>
          <div className='room-type-title'>
            <h1>Trở thành thành viên với nhiều ưu đãi khi đặt phòng</h1>
            <p>Với nhiều ưu đãi khi trả phòng</p>
            <button>BOOK NOW</button>
          </div>
          <div className='rooms'>
            <div className='room-type'>
              <button
                className={currentRoomType === 'HERITAGE' ? 'selected' : ''}
                onClick={() => handleRoomTypeChange('HERITAGE')}
              >
                HERITAGE
              </button>
              <button
                className={currentRoomType === 'RESIDENCE' ? 'selected' : ''}
                onClick={() => handleRoomTypeChange('RESIDENCE')}
              >
                RESIDENCE
              </button>
            </div>

            <div className='room-list'>
              {currentRoomType === 'HERITAGE' && (
                // -------------ROOM HERITAGE---------------
                <div className='room-heritage'>
                  <div className='room-heritage-title'>
                    <h1>HERITAGE DELUXE</h1>
                  </div>
                  <div className='room-heritage__room-deluxe'>
                    <div className='room-heritage__room-deluxe1'>
                      <div className='room-heritage__room-deluxe1-img'>
                        <img src={roomheritage} alt="Heritage Deluxe" />
                      </div>
                      <div className='room-heritage__room-deluxe1-title'>
                        <p>Heritage DELUXE</p>
                        <p>Phòng Deluxe có kết cấu tự nhiên, các phòng này là sự kết hợp giữa tạo tác đương đại và tiện nghi hiện đại</p>
                        <p>2 người lớn | 37-45m2 | Nhìn ra phố / hồ bơi</p>
                      </div>
                    </div>
                    <div className='room-heritage__room-deluxe1'>
                      <div className='room-heritage__room-deluxe2-img'>
                        <img src={roomheritage} alt="Heritage Deluxe Ocean View" />
                      </div>
                      <div className='room-heritage__room-deluxe2-title'>
                        <p>Heritage DELUXE OCEAN VIEW</p>
                        <p>Tận hưởng khung cảnh biển tuyệt đẹp trên ban công theo phong cách châu Âu hoặc mơ mộng với sự thoải mái với phong cách dễ chịu.</p>
                        <p>2 người lớn | 38-42m2 | Nhìn ra biển</p>
                      </div>
                    </div>
                  </div>

                  <div className='room-heritage-title'>
                    <h1>HERITAGE TRIPLE</h1>
                  </div>
                  {/*-------------ROOM TRIPLE---------------*/}
                  <div className='room-heritage__room-triple'>
                    <div className='room-heritage__room-triple1'>
                      <div className='room-heritage__room-triple1-title'>
                        <p>Heritage TRIPLE</p>
                        <p>Hãy đưa bản thân mình vào nơi nghĩ dưỡng hoàng gia rộng 50m2 này hoặc bước ra ban công lát đá cẩm thạch để chiêm ngưỡng khung cảnh trong lành từ thiên nhiên</p>
                        <p>3 người lớn | 47m2 | Nhìn ra phố / hồ bơi</p>
                      </div>
                      <div className='room-heritage__room-triple1-img'>
                        <img src={roomtriple1} alt="Heritage Triple" />
                      </div>
                    </div>
                    <div className='room-heritage__room-triple1'>
                      <div className='room-heritage__room-triple2-title'>
                        <p>Heritage TRIPLE OCEAN VIEW</p>
                        <p>Các phòng này có tầm nhìn toàn biển hoặc vườn và hồ bơi hoàng gia.
                          Phòng TRIPLE là giải pháp hoàn hảo nếu bạn đi du lịch cùng bạn bè hoặc gia đình
                        </p>
                        <p>3 người lớn | 50-64m2 | Nhìn ra biển</p>
                      </div>
                      <div className='room-heritage__room-triple1-img'>
                        <img src={roomtriple2} alt="Heritage Triple Ocean View" />
                      </div>
                    </div>
                  </div>

                  <div className='room-heritage-title'>
                    <h1>HERITAGE SUITES</h1>
                  </div>
                  {/*-------------------HERITAGE SUITES--------------------*/}
                  <div className='room-heritage__room-suites'>
                    <div className='room-heritage__room-suites1'>
                      <div className='room-heritage__room-suites1-img'>
                        <img src={roomsuites1} alt="Heritage Duplex Family" />
                      </div>
                      <div className='room-heritage__room-suites1-title'>
                        <p>Heritage Duplex Family</p>
                        <p>Một phòng khách lộng lẫy, một phòng ngủ riêng sang trọng, một phòng thay đồ rộng rãi
                          hay thậm chí là một phòng vệ sinh phụ dành cho khách, bất kỳ thứ gì cần thiết cho một
                          kỳ nghỉ hoàng gia
                        </p>
                        <p>4 người lớn | 160m2 | Nhìn ra phố</p>
                      </div>
                    </div>

                    <div className='room-heritage__room-suites2'>
                      <div className='room-heritage__room-suites2-img'>
                        <img src={roomsuites2} alt="Heritage Suites Ocean View" />
                      </div>
                      <div className='room-heritage__room-suites2-title'>
                        <p>Heritage SUITES OCEAN VIEW</p>
                        <p>Với diện tích rộng rãi và tầm nhìn ra biển tuyệt đẹp, bạn sẽ được thưởng thức sự sang trọng và
                          sự thoải mái trong căn phòng này
                        </p>
                        <p>4 người lớn | 200m2 | Nhìn ra biển</p>
                      </div>
                    </div>

                    <div className='room-heritage__room-suites3'>
                      <div className='room-heritage__room-suites3-img'>
                        <img src={roomsuites3} alt="Heritage Suites VIP" />
                      </div>
                      <div className='room-heritage__room-suites3-title'>
                        <p>Heritage SUITES VIP</p>
                        <p>Mỗi phòng đều được thiết kế để đáp ứng nhu cầu của các vị khách hoàng gia với không gian phòng
                          rộng lớn, thiết kế hiện đại và tiện nghi đầy đủ
                        </p>
                        <p>4 người lớn | 250m2 | Nhìn ra biển</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentRoomType === 'RESIDENCE' && (
                // -------------ROOM RESIDENCE---------------
                <div className='room-residence'>
                  <div className='room-residence-title'>
                    <h1>RESIDENCE DELUXE</h1>
                  </div>
                  <div className='room-residence__room-deluxe'>
                    <div className='room-residence__room-deluxe1'>
                      <div className='room-residence__room-deluxe1-img'>
                        <img src={residence1} alt="Residence Deluxe" />
                      </div>
                      <div className='room-residence__room-deluxe1-title'>
                        <p>Residence DELUXE</p>
                        <p>Các phòng được thiết kế theo phong cách cổ điển và sang trọng với diện tích rộng và tầm nhìn đẹp
                        </p>
                        <p>2 người lớn | 37-45m2 | Nhìn ra phố / hồ bơi</p>
                      </div>
                    </div>
                    <div className='room-residence__room-deluxe2'>
                      <div className='room-residence__room-deluxe2-img'>
                        <img src={residence2} alt="Residence Deluxe Ocean View" />
                      </div>
                      <div className='room-residence__room-deluxe2-title'>
                        <p>Residence DELUXE OCEAN VIEW</p>
                        <p>Tận hưởng khung cảnh biển tuyệt đẹp trên ban công theo phong cách châu Âu</p>
                        <p>2 người lớn | 38-42m2 | Nhìn ra biển</p>
                      </div>
                    </div>
                  </div>

                  <div className='room-residence-title'>
                    <h1>RESIDENCE TRIPLE</h1>
                  </div>
                  {/*-------------ROOM TRIPLE---------------*/}
                  <div className='room-residence__room-triple'>
                    <div className='room-residence__room-triple1'>
                      <div className='room-residence__room-triple1-img'>
                        <img src={roomgrand1} alt="Residence Triple" />
                      </div>
                      <div className='room-residence__room-triple1-title'>
                        <p>Residence TRIPLE</p>
                        <p>Phòng TRIPLE là sự kết hợp hoàn hảo của sự thoải mái và tiện nghi với diện tích rộng và phong cách hiện đại</p>
                        <p>3 người lớn | 47m2 | Nhìn ra phố / hồ bơi</p>
                      </div>
                    </div>
                    <div className='room-residence__room-triple2'>
                      <div className='room-residence__room-triple2-img'>
                        <img src={roomgrand2} alt="Residence Triple Ocean View" />
                      </div>
                      <div className='room-residence__room-triple2-title'>
                        <p>Residence TRIPLE OCEAN VIEW</p>
                        <p>Khám phá sự sang trọng và tinh tế với phòng TRIPLE với tầm nhìn ra biển tuyệt đẹp</p>
                        <p>3 người lớn | 50-64m2 | Nhìn ra biển</p>
                      </div>
                    </div>
                  </div>

                  <div className='room-residence-title'>
                    <h1>RESIDENCE SUITES</h1>
                  </div>
                  {/*-------------------RESIDENCE SUITES--------------------*/}
                  <div className='room-residence__room-suites'>
                    <div className='room-residence__room-suites1'>
                      <div className='room-residence__room-suites1-img'>
                        <img src={roomresidencesuites1} alt="Residence Suites" />
                      </div>
                      <div className='room-residence__room-suites1-title'>
                        <p>Residence SUITES</p>
                        <p>Khám phá không gian rộng rãi và sự tiện nghi sang trọng với căn phòng SUITES này</p>
                        <p>4 người lớn | 160m2 | Nhìn ra phố</p>
                      </div>
                    </div>

                    <div className='room-residence__room-suites2'>
                      <div className='room-residence__room-suites2-img'>
                        <img src={roomresidencesuites2} alt="Residence Suites Ocean View" />
                      </div>
                      <div className='room-residence__room-suites2-title'>
                        <p>Residence SUITES OCEAN VIEW</p>
                        <p>Trải nghiệm sự sang trọng và sự tiện nghi với tầm nhìn tuyệt đẹp ra biển trong căn phòng này</p>
                        <p>4 người lớn | 200m2 | Nhìn ra biển</p>
                      </div>
                    </div>

                    <div className='room-residence__room-suites3'>
                      <div className='room-residence__room-suites3-img'>
                        <img src={roomresidencevip} alt="Residence Suites VIP" />
                      </div>
                      <div className='room-residence__room-suites3-title'>
                        <p>Residence SUITES VIP</p>
                        <p>Trải nghiệm sự xa hoa và sang trọng trong phòng VIP với thiết kế hiện đại và tiện nghi đầy đủ</p>
                        <p>4 người lớn | 250m2 | Nhìn ra biển</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

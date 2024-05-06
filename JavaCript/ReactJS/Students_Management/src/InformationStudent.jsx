import React from 'react'

export default function InformationStudent({handleSubmit}) {
  return (
    <>
    <div className='information-student'>
        <h1>Thông tin sinh viên</h1>
        <form onSubmit={handleSubmit}>
            <div className='student'>
            <label htmlFor="student-id">Mã sinh viên</label>
            <input type="text" id="student-id" />
            </div>
            <div className='student'>
            <label htmlFor="student-name">Tên sinh viên</label>
            <input type="text" id="student-name" />
            </div>
            <div className='student'>
            <label htmlFor="student-age">Tuổi</label>
            <input type="text" id="student-age" />
            </div>
            <div className='student'>
            <label htmlFor="gender">Giới tính</label>
            <input type='text' id='gender'/>
            </div>
            <div className='student'>
            <label htmlFor="BirthDay">Ngày sinh</label>
            <input type='date' id='BirthDay'/>
            </div>
            <div className='student'>
            <label htmlFor="student-birthplace">Nơi sinh</label>
            <input type='text' id='student-birthplace'/>
            </div>
            <div className='student'>
            <label htmlFor="student-address">Địa chỉ</label>
            <input type='text' id='student-address'/>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
    </>
  )
}

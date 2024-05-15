import React from 'react'

export default function AddSudent({handleCancel, handleNewAddStudents, handleSubmit}) {
  return (
    <>
    <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title">Thêm mới sinh viên</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={handleCancel}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor='student-id'>Tên sinh viên</label>
                    <input type="text" className="form-control" id='student-id' required />
                  </div>
                  <div className="form-group">
                    <label htmlFor='student-email'>Email</label>
                    <input type="email" className="form-control" id='student-email' required />
                  </div>
                  <div className="form-group">
                    <label htmlFor='student-address'>Địa chỉ</label>
                    <textarea
                      className="form-control"
                      required
                      id='student-address'
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor='student-phone'>Số điện thoại</label>
                    <input type="text" className="form-control" id='student-phone' required />
                  </div>
                </div>
                <div className="modal-footer">
                <button onClick={handleCancel}>Cancel</button>
                <button type='submit' onClick={()=>handleNewAddStudents({id:document.getElementById('student-id').value, 
                  student_name:document.getElementById('student-id').value,
                email:document.getElementById('student-email').value, address:document.getElementById('student-address').value, phone:document.getElementById('student-phone').value
                })}>Add</button>
                 </div>   
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

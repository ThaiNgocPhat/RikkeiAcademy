import React from 'react'

export default function Edit({handleCancel, handleSubmitEdit,student, handleSave}) {
  return (
    <>
   <div id="editEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form onSubmit={handleSubmitEdit}>
        <div className="modal-header">
          <h4 className="modal-title">Sửa thông tin sinh viên</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={handleCancel}>×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Tên sinh viên</label>
            <input 
            type="text" 
            className="form-control"
            defaultValue={student.student_name}
            required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" 
            defaultValue={student.email}
            required />
          </div>
          <div className="form-group">
            <label>Địa chỉ</label>
            <textarea className="form-control" required defaultValue={student.address} />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" className="form-control" 
            defaultValue={student.phone}
            required />
          </div>
        </div>
        <div className="modal-footer">
          <button type='submit' onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

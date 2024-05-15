import React from 'react'

export default function Delete({handleCancel,handleDelete, student_name}) {
  return (
    <>
    <div id="deleteEmployeeModal" className="modal fade">
    <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Xóa nhân viên</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true"
          onClick={handleCancel}>×</button>
        </div>
        <div className="modal-body">
          <p>Bạn chắc chắn muốn xóa sinh
            viên</p>
        </div>
        <div className="modal-footer">
          <button onClick={()=> handleDelete()}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

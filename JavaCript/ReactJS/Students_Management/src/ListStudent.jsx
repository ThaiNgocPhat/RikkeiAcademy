import React from 'react'

export default function ListStudent() {
  return (
    <>
    <div className='list-student'>
        <h1>Danh sách sinh viên</h1>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>SV01</td>
                    <td>Nguyễn Văn A</td>
                    <td>20</td>
                    <td>Nam</td>
                    <td>
                        <button class="view-btn">Xem</button>
                        <button class="edit-btn">Sửa</button>
                        <button class="delete-btn">Xóa</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>SV02</td>
                    <td>Nguyễn Văn B</td>
                    <td>21</td>
                    <td>Nam</td>
                    <td>
                        <button class="view-btn">Xem</button>
                        <button class="edit-btn">Sửa</button>
                        <button class="delete-btn">Xóa</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SV03</td>
                    <td>Nguyễn Văn C</td>
                    <td>22</td>
                    <td>Nam</td>
                    <td>
                        <button class="view-btn">Xem</button>
                        <button class="edit-btn">Sửa</button>
                        <button class="delete-btn">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

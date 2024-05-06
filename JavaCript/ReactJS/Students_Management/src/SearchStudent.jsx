import React from 'react'

export default function SearchStudent({handleSubmit}) {
  return (
    <>
        <div className='search-student'>
            <form onSubmit={handleSubmit}>
                <button>Thêm mới sinh viên</button>
                <input 
                type="text" 
                placeholder='Tìm kiếm tên'
                className='search'
                />
                <button>Tìm kiếm</button>
                <input type="text" 
                placeholder='Sắp xếp'
                className='sort'
                />
            </form>
        </div>
    </>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
export default function CategoryDetail() {
    const { categoryName } = useParams()
  return (
    <>
    <h2>CategoryDetail {categoryName}</h2>
    </>
  )
}

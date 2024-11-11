import React from 'react'


export default function Pagination( props: {pages: number}) {
    const{ pages }=props
  return (
    <nav aria-label="Page navigation example">
    <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    
    {
    Array.from({length: pages }).map((item, index) => (
        <li className="page-item" key={index}>
            <a className="page-link" href="#">
            {index +1}
            </a>
        </li>
    ))
}
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
  )
}

import React from 'react'
import './style.css'
function Recipe() {
  return (
    <div className='recipe'>
      <h2>材料（2人分）</h2>
      <ul className='create'>
        <li id='item1'>
          テキストテキスト
          <span>1個</span>
        </li>

        <li id='item2'>
          テキストテキスト<span>1個</span>
        </li>
        <li id='item3'>
          テキストテキスト<span>1個</span>
        </li>
        <li id='item4'>
          テキストテキスト<span>1個</span>
        </li>
        <li id='item5'>
          テキストテキスト<span>1個</span>
        </li>
      </ul>
    </div>
  )
}

export default Recipe

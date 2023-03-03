import React from 'react'
import './style.css'
import FooterLogo from '../../../../asetts/images/© 2021 Recipe Diary.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <Link to={'/'}>
        <img src={FooterLogo} alt='' />
      </Link>
      <ul>
        <li id='instagram'>
          <Link to='https://www.instagram.com/' target='_blank'>
            instagram
          </Link>
        </li>
        <li id='twitter'>
          <Link to='https://twitter.com' target='_blank'>
            Twitter
          </Link>
        </li>
        <li id='facebook'>
          <Link to={'https://ja-jp.facebook.com/'} target='_blank'>
            Facebook
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer

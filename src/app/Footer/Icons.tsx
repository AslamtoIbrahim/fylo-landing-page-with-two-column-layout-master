import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icons = () => {
  return (
    <div className='w-full flex items-center gap-4 justify-center'>
      <FontAwesomeIcon icon={faFacebook} className='icon' />
      <FontAwesomeIcon icon={faTwitter} className='icon' />
      <FontAwesomeIcon icon={faInstagram} className='icon' />
    </div>
  )
}

export default Icons

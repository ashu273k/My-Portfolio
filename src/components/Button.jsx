import React from 'react'

function Button({text, className, id}) {
  return (
   <a className={`${className ?? '' } cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle'/>
            <p className='text'>{text}</p>
            <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
   </a>
  )
}

export default Button

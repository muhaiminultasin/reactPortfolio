import React from 'react'

const SectionTitle = ({title,subTitle}) => {
  return (
    <div>
      <p className='text-[14px] text-primary'>{subTitle}</p>
      <h1 className='text-[40px] text-secondary font-[600]'>{title}</h1>
    </div>
  )
}

export default SectionTitle

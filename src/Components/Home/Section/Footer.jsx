import React from 'react'
import SectionTitle from "../../Common/SectionTitle"

const Footer = () => {
  return (
    <div className='border-t-[1px] border-black pt-10 '>
      <p className='text-center text-primary'>Developed by</p>
        <SectionTitle title={"TASIN MUHAIMINUL"} titleClass="text-primary text-center" subTitle={"tasinmuhaiminul@gmail.com"} subTitleClass={"text-center text-secondary text-base"} className={"flex-col-reverse"}/>
    </div>
  )
}

export default Footer

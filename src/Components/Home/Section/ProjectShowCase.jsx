import {React,useEffect, useRef} from 'react';
import {gsap} from "gsap";
import SectionTitle from '../../Common/SectionTitle'

const ProjectShowCase = () => {


  const portFolioRef = useRef();

  useEffect( () => {
    const context = gsap.context( () => {
      gsap.from(portFolioRef.current.querySelectorAll("p, h1, #intro, #items"), {
        x:100,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
          trigger:portFolioRef.current,
          start:"top 70%",
          end:"top 40%",
          scrub:2,
        },
        stagger:{
          each:0.2,
        },
      })
    },portFolioRef );

    return () => {
      context.revert();
    }
  },[]);

  const Projects= [
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
    {
      img:"img/creative.png",
      title:"degic web",
      type:"Landing page",
    },
  ]
  return (
    <section ref={portFolioRef} className='py-[100px] px-[20px] md:px-[50px] lg:px-[80px] text-center'>
      <div id="intro">
      <SectionTitle title={"My Portfolio"} subTitle={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}/>
      </div>
      <div id='items' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 text-start'>
        {
          Projects.map(({img,title,type},i)=>{
            return <div   key={i} className=' bg-darkPrimary shadow-custom-dark p-5 rounded-xl hover:shadow-lg transition-all deration-300 text-secondary hover:text-primary'>
            <img src={img} alt="" className='rounded-md'/>
            <div className='mt-5 '>
              <h1 className='font-[300]'>{title}</h1>
              <p>{type} </p>
            </div>
          </div>
          })
        }
      </div>
    </section>
  )
}

export default ProjectShowCase

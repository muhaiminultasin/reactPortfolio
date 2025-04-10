import { React, useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';
import SectionTitle from '../../Common/SectionTitle';
import project1 from '../../../../assets/img/Project1Theme.jpeg'
import project2 from '../../../../assets/img/Project2Theme.jpeg'

const ProjectShowCase = forwardRef((props, ref) => {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('#intro, #items'), {
        x: 100,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ref.current,
        },
        stagger: {
          each: 0.2,
        },
      });
    }, ref);

    return () => {
      context.revert();
    };
  }, [ref]);

  const Projects = [
    {
      img: project1,
      title: 'Made man barber',
      type: 'Landing page design',
      link: 'https://barber-shop-eight-sooty.vercel.app',
    },
    {
      img: project2,
      title: 'Restaurant website',
      type: 'Website',
      link:'https://coffeebean2.vercel.app/'
    },
    {
      img: 'img/creative.png',
      title: 'degic web',
      type: 'Landing page',
    },
  ];

  return (
    <section ref={ref} className='px-[20px] md:px-[50px] lg:px-[80px] text-center overflow-y-hidden'>
      <div id='intro'>
        <SectionTitle title={'My Portfolio'} subTitle={'VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'} />
      </div>
      <div id='items' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 text-start'>
        {Projects.map(({ img, title, type, link }, i) => {
          return (
            <a href={link} target='_blank' key={i}>
              <div className='content bg-darkPrimary shadow-custom-dark p-5 rounded-xl hover:shadow-lg transition-all deration-300 text-secondary hover:text-primary'>
                <img src={img} alt='' className='rounded-md' />
                <div className='mt-5 '>
                  <h1 className='font-medium'>{title}</h1>
                  <p className='text-sm'>{type}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default ProjectShowCase;

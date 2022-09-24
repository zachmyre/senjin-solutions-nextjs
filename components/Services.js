
import React from 'react';
import { Container, CreatorItem, ServiceCard } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInDownShorter2 } from '@/keyframes';
const Services = () => {
  return (
    <Container className={'flex flex-col sm:flex-row'}>
    <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-16'>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>IT Consulting</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
            Technology strategies and modernization techniques configured by professionals.
          </p>
        </Reveal>
      </div>
      <div className='grid grid-cols-1 gap-4'>
          <Reveal
            key={'i'}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (0 + 1)}
          >
            <ServiceCard imgPath={'/tech/server.png'} altText={'IT Consulting with popular server solutions fitting all price points.'} />
          </Reveal>
      </div>
      </div>
   
   {/* ******************************************************************** */}
   <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-16'>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>Tech Upgrades</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
            Upgrade to latest high performing technology with lowest possible price points.
          </p>
        </Reveal>
      </div>
      <div className='grid grid-cols-1 gap-4'>
          <Reveal
            key={'i'}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={100 * (0 + 1)}
          >
            <ServiceCard imgPath={'/tech/techmap.png'} altText={'Technology upgrades and infrastructure planning.'} />
          </Reveal>
      </div>
      </div>
    </Container>
  );
};

export default Services;

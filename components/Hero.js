import React from 'react';
import { Button, Container, Form } from '.';
import { JackInTheBox, Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInLeft, fadeInUp } from '@/keyframes';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container className={'flex flex-col sm:flex-row mt-20 mb-6'}>
      <div className='w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-16'>
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className='text-3xl lg:text-5xl font-bold mb-5'>
            Expand and Grow with Technology Solutions
          </h1>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className='mb-4 opacity-50'>
            IT Consulting | Business Architecture Planning | SEO Services | Technology Upgrades
          </p>
        </Reveal>
    <Form />
      
        {/* <div className='grid grid-cols-3 gap-3'>
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className='font-bold mb-1'></p>
              <p className='opacity-50 '>Ahead</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className='font-bold mb-1'>Organic</p>
              <p className='opacity-50 '>Traffic</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className='font-bold mb-1'>Reaching</p>
              <p className='opacity-50 '>Goals</p>
            </div>
          </Reveal>
        </div> */}
      </div>
      <div className='flex-1 mt-14 sm:mt-0'>
        <JackInTheBox delay={200} triggerOnce>
          <div className='relative w-full h-[400px] lg:h-[500px]'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src='/hero/heroimage.png'
              alt='hero'
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;

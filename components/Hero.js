import React from 'react';
import { Button, Container } from '.';
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

        <div className='flex-col mb-10 transition duration-300 ease-in-out bg-[#ffffff1a] overflow-hidden rounded-lg shadow-lg px-4 pb-6'>
          <div class="my-4">
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <form action="./" method="post">
              <label class="block text-md font-600 mb-2" for="email">Provide your email, we will get in touch.</label>
              <input class="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" id="email" name="email" />
            </form>
          </Reveal>
          </div>
          <div>
          <Reveal keyframes={fadeInUp} duration={1000} delay={400}>
          
            <Button
              isLink
              href={'/#about'}
              className={'mr-3'}
              variant={'primary'}
            >
              Get in Touch 
            </Button>
            {/* <Button isLink href={'/#collections'}>
              Explore More
            </Button> */}
          </Reveal>
          </div> </div>
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

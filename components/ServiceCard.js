import Image from 'next/image';
import React from 'react';
import { Button } from '.';

const ServiceCard = ({imgPath, altText}) => {
  return (
    <div className='hover:bg-[#ffffff66] transition duration-300 ease-in-out bg-[#ffffff1a] overflow-hidden rounded-lg shadow-lg mb-4 p-6'>
      <div className='rounded-lg overflow-hidden mb-3 relative h-[250px] w-full'>
        <Image
          objectFit='cover'
          objectPosition={'center'}
          layout='fill'
          src={imgPath}
          className='object-cover object-center'
          alt={altText}
        />
      </div>
      {/* <div className='pb-8 pl-8 pr-8 flex flex-col justify-center items-center mt-[-60px]'>
        <div className='w-[100px] relative z-10 h-[100px] mb-3'>
          <Image
            width={100}
            height={100}
            src={'/sponsor/apple.png'}
            className='object-cover object-center w-full h-full'
            alt={'apple'}
          />
        </div>
        <p className='font-bold text-xl text-center mb-4'>{'Zach'}</p>
        <p className='opacity-50 text-center text-sm mb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div> */}
    </div>
  );
};

export default ServiceCard;

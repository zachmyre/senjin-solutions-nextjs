

import React, { useState } from 'react';
import { Button } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInUp } from '@/keyframes';
import axios from 'axios';

const Form = () => {
  const date = new Date();
  const [form, setForm] = useState({name: '', email: '', description: '', date: date.toLocaleString()});
  const [message, setMessage] = useState('');
  async function submitForm(){
      const date = new Date();
      axios.post('/api/ticket', form)
      .then(function (response) {
        console.log(response);
        setMessage('We will reach out shortly to assist you.');
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }
if(message == ''){
  return (
    <div className='flex-col mb-10 transition duration-300 ease-in-out bg-[#ffffff1a] overflow-hidden rounded-lg shadow-lg px-4 pb-6'>
<div className="my-4">
<Reveal keyframes={fadeInUp} duration={1000} delay={200}>
<label className="block text-md font-600 mb-2" htmlFor="name">Name</label>
    <input onChange={(event) => setForm({...form, name: event.target.value})} className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" id="name" name="name" placeholder='John Smith' />
    <label className="block text-md font-600 mb-2" htmlFor="email">Email</label>
    <input onChange={(event) => setForm({...form, email: event.target.value})} className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" id="email" name="email" placeholder='johnsmith@mail.com' />
    <label className="block text-md font-600 mb-2" htmlFor="textarea">Description</label>
    <textarea onChange={(event) => setForm({...form, description: event.target.value})} className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" type="text" id="textarea" name="textarea" placeholder='How can we help?' />
    <Reveal keyframes={fadeInUp} duration={1000} delay={400}>

  <Button
    className={'mr-3'}
    variant={'primary'}
    onClick={() => submitForm()}
  >
    Get in Touch 
  </Button>
  {/* <Button isLink href={'/#collections'}>
    Explore More
  </Button> */}
</Reveal>
</Reveal>
</div>
<div>

</div> </div>
  )} else {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Thank you!</strong>
    <span className="block sm:inline">{message}</span>
  </div>
    )
  }
};

export default Form;
import React from 'react';
import Loading from './Loading.gif';


export default function Spinner() {

  return (
    <div className='text-center'>
      <img style={{ width: '2rem' }} src={Loading} alt='loading' />
    </div>
  )
}

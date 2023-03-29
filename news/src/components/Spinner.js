import React,{Component} from 'react';
import Loading from './Loading.gif';


export default class Spinner extends Component{

  render(){
    return(
      <div className='text-center'>
   <img style={{width:'2rem'}}  src={Loading} alt='loading'/>
        </div>
)
  }
}
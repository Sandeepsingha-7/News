import React,{Component} from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
   
   render() {
      return(
        <div className="container">
        <Newsitem title="myTitle" description="myDesc"/>
        </div>
      )
   }
}

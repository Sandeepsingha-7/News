import React, { Component } from 'react';
import Newsitem from './Newsitem';

import Spinner from './Spinner';


export default class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {

    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: parseData.articles,totalResults:parseData.totalResults,loading:false })

  }

  handleNext = async () => {
if(this.page+1>Math.ceil(this.state.totalResults/20)){

  
} else {
    let url = `https://saurav.tech/NewsAPI/top-headlines/${this.props.category}/health/${this.props.country}.json`;
     this.setState({loading:true})

    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData); 
    this.setState({
      page: this.page + 1,

      articles: parseData.articles,
      loading:false
    })
}
  }

  handlePrev = async () => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/${this.props.category}/health/${this.props.country}.json`
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page: this.page - 1,

      articles: parseData.articles,
      loading:false
    })

  }






  render() {
    return (
      <>
      <h1 className="text-center my-3" id='headlinefont'>TOP HEADLINES</h1>
      {this.state.loading && <Spinner/>}
      <div className="container">
        <div className="row" >
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description : ''} urlToImage={element.urlToImage} url={element.url} />
            </div>
          })}

        </div>
        <div className='container d-flex justify-content-between my-5'>
          <button type='button' className='btn btn-dark' disabled={this.state.page<=1} onClick={this.handlePrev}>&larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
      </>
    )
  }
}

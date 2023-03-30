import React, { Component } from 'react';
import Newsitem from './Newsitem';

import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalize(this.props.category)} - News`
  }

 capitalize=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1)
}
  
  async updateNews() {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
  }


  async componentDidMount() {

    await this.updateNews()
  }

  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 })
    this.updateNews()

  }


  render() {
    return (
      <>
        <h1 className="text-center my-3" id='headlinefont'>TOP HEADLINES</h1>
        {this.state.loading && <Spinner />}
        <div className="container">
          <div className="row" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description : ''} urlToImage={element.urlToImage} url={element.url} author={element.author ? element.author : 'unknown'} time={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
          <div className='container d-flex justify-content-between my-5'>
            <button type='button' className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr; Previous</button>
            <button type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}
News.defaultProps = {
  country: 'in',
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}
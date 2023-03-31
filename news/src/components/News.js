import React, { Component } from 'react';
import Newsitem from './Newsitem';

import Spinner from './Spinner';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    
      totalResults: 0
     }
    document.title = `${this.capitalize(this.props.category)} - News`
  }



  capitalize = (string) => {
    return string.charAt(0).toUpperCase() +
      string.slice(1)
  }

  async updateNews() {
    this.props.setProgress(10)
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(30)
    let parseData = await data.json()
    console.log(parseData);
    this.props.setProgress(70)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults, loading: false
    })
    this.props.setProgress(100)
  }


  async componentDidMount() {

    await this.updateNews()
  }

  fetchMoreData = async() => {
    
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults, loading: false
    })
  }


  render() {
    

    
    return (
      <>
        
        <h1 className="text-center my-3" id='headlinefont'>TOP {this.props.category.toUpperCase()} HEADLINES</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.lenght !== this.state.totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row" >
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description : ''} urlToImage={element.urlToImage} url={element.url} author={element.author ? element.author : 'unknown'} time={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>

      </>

    )
  }

}
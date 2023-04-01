import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

import Spinner from './Spinner';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const[articles,setArticles]=useState([])
const[loading,setLoading]=useState(true)
  const[totalResults,setTotalResults]=useState(0)
//const[page,setPage]=useState(1)
  

  


 const capitalize = (string) => {
    return string.charAt(0).toUpperCase() +
      string.slice(1)
  }

  const updateNews=async()=>{
    props.setProgress(10)
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parseData = await data.json()
    console.log(parseData);
    props.setProgress(70)
    setArticles(parseData.articles)
setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

useEffect(()=>{
  document.title = `${capitalize(props.category)} - News`  
  updateNews();
},[])

const fetchMoreData = async () => {

    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
    
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
     setArticles(articles.concat(parseData.articles))
setTotalResults(parseData.totalResults)
    
}

 return (
      <>

        <h1 className="text-center" id='headlinefont' style={{marginTop:'80px'}}>TOP {props.category.toUpperCase()} HEADLINES</h1>
        {loading && <Spinner />} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row" >
              {articles.map((element) => {
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


News.defaultProps = {
  country: 'in',
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}
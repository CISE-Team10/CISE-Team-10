import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleTable from './ArticleTable'
import {TextField } from '@material-ui/core';
//import search from './search';


class ShowarticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      fullArticle: []
    };
   
  }

  componentDidMount() {
    axios
      .get('https://seeds-2021-api.herokuapp.com/api/articles')
      .then(res => {
        this.setState({
          article: res.data,
          fullArticle: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowarticleList');
      })      
  }


  render() {
    var article = this.state.article;
    console.log("PrintBook: " + article);
    let articleList;

    const handleChange = (event) => {
      console.log(event.target.value);    

      var fullArticle = this.state.fullArticle;
      var searchresult = fullArticle.filter(one => one.title.toLowerCase().includes(event.target.value.toLowerCase()));
      console.log(searchresult);

      this.setState({article: searchresult});  
            
    };    

    if(!article || article.length === 0) {
      articleList = "No articles found.";
    } else {

      // articleList = article.map((book, k) =>
      //   <ArticleTable book={book} key={k} />
      // );

      console.log(article);
      articleList = <ArticleTable articleInfo = {article}/>;        
    }

    return (
      <div className="ShowarticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">article List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Articles
              </Link>
              <br />
              <br />
              <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleChange}/>
              <hr />              
            </div>
          </div>

          <div className="l">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowarticleList;
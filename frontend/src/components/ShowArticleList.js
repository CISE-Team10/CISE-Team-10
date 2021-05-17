import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleTable from './ArticleTable'
import {TextField } from '@material-ui/core';
import ArticleSearchAndFilter from './ArticleSearchAndFilter';


class ShowarticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      fullArticle: [],
      strength:[],
      methodologies:[],
      claim:[],
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

    const sortTheFilter = (articles) => {
      let simplifyArticles = [];

      if(checkArrayIsNotEmpty(this.state.methodologies))
      {
        this.state.methodologies.forEach(item => {
          if (simplifyArticles.length === 0) {
            simplifyArticles = articles.filter(one => one.software_engineering_methodology.toLowerCase() === item.toLowerCase());
          }
          else {
            simplifyArticles = simplifyArticles.concat(articles.filter(one => one.software_engineering_methodology.toLowerCase() === item.toLowerCase()));
          }
        });
      }

      if(checkArrayIsNotEmpty(this.state.claim))
      {
        this.state.claim.forEach(item => {
          if (simplifyArticles.length === 0) {
            simplifyArticles = articles.filter(one => one.claim.toLowerCase() === item.toLowerCase());
          }
          else {
            simplifyArticles = simplifyArticles.concat(articles.filter(one => one.claim.toLowerCase() === item.toLowerCase()));
          }
        });       
      }

      if(checkArrayIsNotEmpty(this.state.strength))
      {
        this.state.strength.forEach(item => {
          if (simplifyArticles.length === 0) {
            simplifyArticles = articles.filter(one => one.strength_of_evidence.toLowerCase() === item.toLowerCase());
          }
          else {
            simplifyArticles = simplifyArticles.concat(articles.filter(one => one.strength_of_evidence.toLowerCase() === item.toLowerCase()));
          }
        });
      }
        
      return simplifyArticles;
    }

    const checkArrayIsNotEmpty = (simplifyArray) => {

      if(simplifyArray.length !== 0)
      {
        return true;
      }

      return false;
    }
    
    if(!article || article.length === 0) {
      articleList = "No articles found.";
    } else {

      if(this.state.strength.length !== 0 || this.state.methodologies.length !== 0 || this.state.claim.length !== 0)
      {
        article = sortTheFilter(article);
      }

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
              <ArticleSearchAndFilter chnageMethodologies={newMethodologies => this.setState({methodologies: newMethodologies})}
                                      changeStrength={newStrength => this.setState({strength: newStrength})}
                                      changeClaim={newClaim => this.setState({claim: newClaim})} />
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
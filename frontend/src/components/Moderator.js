import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SuggestArticleTable from './SuggestArticleTable'
import {TextField } from '@material-ui/core';



class Moderator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestArticle: [],
      suggestFullArticle: []
    };
   
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/suggestArticles') //no heroku for this yet, so using localhost
      .then(res => {
        this.setState({
          suggestArticle: res.data,
          suggestFullArticle: res.data
        })
      })
      .catch(err =>{
        console.log('Error from Moderator');
      })      
  }


  render() {
    var suggestArticle = this.state.suggestArticle;
    console.log("PrintBook: " + suggestArticle);
    let suggestArticleList;

    const handleChange = (event) => {
      console.log(event.target.value);    

      var suggestFullArticle = this.state.suggestFullArticle;
      var searchresult = suggestFullArticle.filter(one => one.title.toLowerCase().includes(event.target.value.toLowerCase()));
      console.log(searchresult);

      this.setState({suggestArticle: searchresult});  
            
    };    

    if(!suggestArticle || suggestArticle.length === 0) {
      suggestArticleList = "No articles found.";
    } else {

      console.log(suggestArticle);
      suggestArticleList = <SuggestArticleTable suggestArticleInfo = {suggestArticle}/>;        
    }

    return (
      <div className="Moderator">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Suggested Article List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/" className="btn btn-outline-warning float-right">
                + Back
              </Link>
              <br />
              <br />
              <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleChange}/>
              <hr />              
            </div>
          </div>
       
          <div className="l">
                {suggestArticleList}
          </div>
        </div>
      </div>
    );
  }
}

export default Moderator;
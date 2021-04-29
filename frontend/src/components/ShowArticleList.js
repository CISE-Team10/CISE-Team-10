import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
//import search from './search';

class ShowarticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/articles')
      .then(res => {
        this.setState({
          article: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowarticleList');
      })
  };


  render() {
    const article = this.state.article;
    console.log("PrintBook: " + article);
    let articleList;

    if(!article) {
      articleList = "there is no book recored!";
    } else {
      articleList = article.map((book, k) =>
        <ArticleCard book={book} key={k} />
      );
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
              <hr />
              <form action="/action_page.php">
               <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
          </form>
            </div>
          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowarticleList;
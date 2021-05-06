import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

//repurposed to be a request to add a certain article to the database
class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      year:'',
      software_engineering_methedology:'',
      claim:'',
      strength_of_evidence:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      year: this.state.uear,
      software_engineering_methedology: this.state.software_engineering_methedology,
      claim: this.state.claim,
      strength_of_evidence: this.state.strength_of_evidence
    };

    axios
      .post('https://seeds-2021-api.herokuapp.com/api/suggestedArticles', data) //not sure this works, I just changed the end from books to my collection name
      .then(res => {
        this.setState({
          title: '',
          author:'',
          year:'',
          software_engineering_methedology:'',
          claim:'',
          strength_of_evidence:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in SuggestArticle");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Return to Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Suggest New Article</h1>
              <p className="lead text-center">
                  Enter article information below:
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Year'
                    name='year'
                    className='form-control'
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Software engineering methedology'
                    name='software_engineering_methedology'
                    className='form-control'
                    value={this.state.software_engineering_methedology}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Strength of evidence'
                    name='strength_of_evidence'
                    className='form-control'
                    value={this.state.strength_of_evidence}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

//repurposed to be a request to add a certain article to the database
class SuggestArticleUpload extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      year:'',
      software_engineering_methodology:'',
      claim:'',
      strength_of_evidence:'',
      link:'',
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
      year: this.state.year,
      software_engineering_methodology: this.state.software_engineering_methodology,
      claim: this.state.claim,
      strength_of_evidence: this.state.strength_of_evidence,
      link: this.state.link
    };

    axios
      .post('http://localhost:8082/api/suggestArticles', data)
      .then(res => {
        this.setState({
          title: '',
          author:'',
          year:'',
          software_engineering_methodology:'',
          claim:'',
          strength_of_evidence:'',
          link:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in articles");
      })
  };

  render() {
    return (
      <div className="SuggestArticleUpload">
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
                    placeholder='Software engineering methodology'
                    name='software_engineering_methodology'
                    className='form-control'
                    value={this.state.software_engineering_methodology}
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
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Link'
                    name='link'
                    className='form-control'
                    value={this.state.link}
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

export default SuggestArticleUpload;
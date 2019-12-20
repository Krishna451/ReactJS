import React from 'react';
class NewPost extends React.Component {
  state = {
    title: '',
    body: ''
  };
  // handle change state
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
// Handle form submission
 
 handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

// Handle form Reset
  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Create New Post</h1>
          <form onSubmit={ this.handleSubmit }>
          <div >
              <input
              type="text"
              placeholder="Title"
               name="title"
              onChange={ this.handleInputChange }
              value={ this.state.title }
            />
          </div>
          <div >
            <textarea
              placeholder="Body"
              name="body"
              onChange={ this.handleInputChange }
              value={ this.state.body }>
            </textarea>
          </div>
          <div >
            <button type="submit" >Add Post</button>
            <button type="button"  onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPost;

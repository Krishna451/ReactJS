import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
class App extends Component {
 render() {
return (
<div>
<CreatePost />
<PostList />
</div>
);
}
}



export default App;
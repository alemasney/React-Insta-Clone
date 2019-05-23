import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
    constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

    render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer postedItem={this.state.posts} />
      </div>
    );
  }
}

export default App;

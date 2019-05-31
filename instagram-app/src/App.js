import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
    state = {
      posts: []
    }

  componentDidMount() {
    this.setState ({
      posts: dummyData
    })
  };

  clickHandler = event => {

  }

    render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer postedItem={this.state.posts} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;

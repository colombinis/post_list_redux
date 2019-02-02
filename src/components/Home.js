import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component  {
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response);
      this.setState({
        posts: response.data.slice(0,10)
      });
    })

  }

  render(){
    const {posts} = this.state;

    const postList = posts.length ? (
      posts.map(p =>{
        return (
          <div key={p.id} className="post card">
            <div className="card-content">
              <span className="card-title">{p.title}</span>
              <p>{p.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No hay posts</div>
    ) ;

    return (
      <div className="container">
        <h1 className="center">Home</h1>
        {postList}
      </div>
    );
  }


}

export default Home;

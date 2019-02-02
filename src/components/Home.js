import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component  {


  render(){
    const {posts} = this.props;

    const postList = posts.length ? (
      posts.map(p =>{
        return (
          <div key={p.id} className="post card">
            <img src={Pokeball} alt="ALt desc"/>
            <div className="card-content">
              <Link to={'/' + p.id }><span className="card-title red-text">{p.title}</span></Link>
              <p>{p.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No hay posts</div>
    ) ;

    return (
      <div className="container home">
        <h1 className="center">Home</h1>
        {postList}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
return {
  posts: state.posts
}
}

export default connect(mapStateToProps)(Home);

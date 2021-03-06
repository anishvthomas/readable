import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Categories  from './components/Categories.js'
import Category  from './components/Category.js'
import Home  from './components/Home'
import NewPost  from './components/NewPost'
import EditPost  from './components/EditPost'
import PostDetail  from './components/PostDetail'
import NewComment  from './components/NewComment'
import EditComment  from './components/EditComment'
import { fetchCategories, fetchPosts , fetchComments} from './actions'


import './App.css'

class App extends Component {
    componentDidMount=()=> {
        this.props.loadCategories()
        this.props.loadAllPosts()
    }

    render() {
    return (
      <div className="container">

        <Categories categorylist={this.props.categories}/>
            <Route exact path ='/' render={() => (
            <Home data={this.props}/> )} />
            <Route exact path="/:categories/:postid" component={PostDetail} />
            <Route exect path ="/create/new/post" component = {NewPost} />
            <Route exact path="/category/list/:categorypath" component={Category} />
            <Route exact path="/create/comment/:postid" component={NewComment}/>
            <Route exact path="/edit/post/:postid" component={EditPost}/>
            <Route exact path="/edit/comment/:commentid" component={EditComment}/>
      </div>
    );
  }
}
function mapStateToProps(state){
    const {categories, posts}= state
    return {
        categories: categories,
        posts: posts,
    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(fetchCategories()),
    loadAllPosts: () => dispatch(fetchPosts()),
    loadAllComments: () => dispatch(fetchComments()),

  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

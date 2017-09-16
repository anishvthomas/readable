import React, { Component } from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Categories  from './components/Categories.js'
import Home  from './components/Home'
import NewPost  from './components/NewPost'
import EditPost  from './components/EditPost'
import PostDetail  from './components/PostDetail'
import NewComment  from './components/NewComment'
import EditComment  from './components/EditPost'
import { fetchCategories, fetchPosts } from './actions'

class App extends Component {
    componentDidMount=()=> {
        this.props.loadCategories()
        this.props.loadAllPosts()
    }
    render() {
        console.log("App render props",this.props.categories)
    return (
      <div className="container">
            <Switch>
            <Route exact path ='/' render={() => (
            <Home data={this.props}/> )} />
            <Route path ='/post' component = {NewPost} />
            <Route exact path="/:categories/:postid" component={PostDetail} />
            <Route exact path="/create/comment/:postid" component={NewComment}/>
            <Route exact path="/edit/post/:postid" component={EditPost}/>

            </Switch>

      </div>
    );
  }
}
function mapStateToProps(state){
    const {categories, posts}= state
    console.log("mapStateToProps state",state)
    console.log("mapStateToProps categories",categories)
    console.log("mapStateToProps posts",posts)
    //console.log("mapStateToProps category",categories.map(item=>item.name+" "+item.path))
    //console.log("categories.reduce",categories.reduce((accum,item)=>  {accum[item.name]=item.path
    //return accum},{}))
    //console.log("mapStateToProps Object.keys(state.category)",Object.keys(state.category))

    return {
        categories: categories,
        posts: posts,
    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(fetchCategories()),
    loadAllPosts: () => dispatch(fetchPosts()),

  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

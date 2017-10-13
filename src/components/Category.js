import React from 'react'
import Categories from './Categories'
import Posts from './Posts'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
 const Category =(props) => {
    const {  posts ,categories} = props
    return (

        <div className='container'>
        {console.log("Home:postlength: ",posts.length)}
        {posts.length && <Posts category={props.category}/>}
        </div>
    )
}
function mapStateToProps(state,ownprops){
    //:categorypath passed from Route is in ownprops.match.params.categorypath

    return {
        posts: state.posts.posts,
        category:ownprops.match.params.categorypath,
        categories:state.categories.categories
        }
}

 export default connect(mapStateToProps)(Category)

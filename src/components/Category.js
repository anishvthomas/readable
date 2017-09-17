import React from 'react'
import Categories from './Categories'
import Posts from './Posts'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
 const Category =(props) => {
    console.log("Category",props)
    const {  posts ,categories} = props

//    console.log("Category: categories",categories)
console.log("Category: posts",posts)
console.log("Category: props.categorypath",props.category)
console.log("7777Category: props.categories",props.categories)
    return (

        <div className='container'>
        {props.categories.length &&<Categories categorylist={props}/>}
        {/*<h1>{props.category} </h1>*/}
        <Link to={`/post`}>  New Post  </Link>
        {console.log("Home:postlength: ",posts.length)}
        {posts.length && <Posts category={props.category}/>}
        {/*posts.posts.length && <Posts allPosts={posts.posts}/>*/}
        </div>
    )
}
function mapStateToProps(state,ownprops){
    //:categorypath passed from Route is in ownprops.match.params.categorypath
    console.log('Category====>state',state)
    console.log('Category=====>ownprops',ownprops)
    return {
        posts: state.posts.posts,
        category:ownprops.match.params.categorypath,
        categories:state.categories.categories
    //    postid: postid,
        //currentpost:state.posts.currentPost,
        //allComments: state.comments
    }
}

 export default connect(mapStateToProps)(Category)

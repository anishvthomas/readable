import React from 'react'
import Posts from './Posts'
import { connect } from 'react-redux'
 const Category =(props) => {
    const {  posts } = props
    return (

        <div className='container'>

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

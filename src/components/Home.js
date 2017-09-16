import React from 'react'
import Categories from './Categories'
import Posts from './Posts'
import {Link} from 'react-router-dom'

 const Home =(props) => {
    console.log("Home",props)
    const { categories, posts } = props.data

    console.log("Home: categories",categories)
    console.log("Home: posts",posts)
    return (

        <div className='container'>
        <Categories categorylist={categories}/>
        <Link to={`/post`}>  New Post  </Link>
        {console.log("Home:postlength: ",posts.posts.length)}
        {posts.posts.length && <Posts/>}
        {/*posts.posts.length && <Posts allPosts={posts.posts}/>*/}
        </div>
    )
}
export default Home

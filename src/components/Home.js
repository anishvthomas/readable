import React from 'react'
import Posts from './Posts'

 const Home =(props) => {
    const { posts } = props.data
    return (

        <div className='container'>
        {posts.posts.length && <Posts category=""/>}
        </div>
    )
}
export default Home

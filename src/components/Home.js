import React from 'react'
import Categories from './Categories'
import Posts from './Posts'
import {Link} from 'react-router-dom'

 const Home =(props) => {
    const { categories, posts } = props.data
    return (

        <div className='container'>
        {posts.posts.length && <Posts category=""/>}
        </div>
    )
}
export default Home

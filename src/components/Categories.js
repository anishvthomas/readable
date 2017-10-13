import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Categories.css'
import { Button } from 'react-bootstrap'
class Categories extends Component {

    componentDidMount() {

    }
    render() {
        const { categories } = this.props.categorylist
        return (
        <div className="categorylist">
        <Link to='/'>  Home  </Link>
        {categories.length && (categories.map(item=><Link to={`/category/list/${item.path}`} key={item.path}>  {item.name}  </Link>))}

        <Link to={"/create/new/post"}>  New Post  </Link>
        <hr/>
        </div>
    )
}
}
export default Categories

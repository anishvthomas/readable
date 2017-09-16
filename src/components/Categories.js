import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Categories.css'
import { Button } from 'react-bootstrap'
class Categories extends Component {

    componentDidMount() {
    //console.log("Categories:componentDidMount")
    //console.log("Categories:componentDidMount this.props.categorylist ",this.props.categorylist)

    }
    render() {
        const { categories } = this.props.categorylist
        //console.log("Categories:this.props ",this.props)
        //console.log("Categories:categories ",categories)
        return (
        <div className="categorylist">

        {categories.length && (categories.map(item=><Link to={`/categories/${item.path}`}>  {item.name}  </Link>))}
        </div>
    )
}
}
export default Categories

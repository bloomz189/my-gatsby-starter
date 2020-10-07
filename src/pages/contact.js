import React, { Component } from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'
export default class contact extends Component {
    render() {
        return (
            <div style={{ color: `teal` }}>
                <Link to="/">Home</Link>
                <Header headerText="Contact" />
                <p>Send us a message!</p>
            </div>
        )
    }
}

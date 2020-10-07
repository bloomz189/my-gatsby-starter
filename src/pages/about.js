import React, { Component } from 'react'
import Header from '../components/header';

export default class About extends Component {
    render() {
        return (
            <div style={{ color: `teal` }}>
                <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary"/>
                <Header headerText="It's pretty cool" />
                <p>Such wow. Very React.</p>
            </div>
        )
    }
}

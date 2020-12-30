import React, { Component } from 'react';


// snipet
import Header from '../components/snippets/Header';
import Footer from '../components/snippets/Footer';


class Primarylayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: false
        };
    }

    render() {
        return (
            <div id="wrapper">
            
                {this.state.Auth ? null : <Header />}
                
                {this.props.children}

                <Footer />
            </div>
        );
    }
}

export default Primarylayout;
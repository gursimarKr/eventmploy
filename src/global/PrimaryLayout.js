import React, { Component } from 'react';


// snipet
import Header from '../components/snippet/Header';
import Footer from '../components/snippet/Footer';
import DashboardHeader from '../components/snippet/DashboardHeader';


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
            
                {this.state.Auth ? <DashboardHeader/> : <Header />}
                
                {this.props.children}

                <Footer />
            </div>
        );
    }
}

export default Primarylayout;
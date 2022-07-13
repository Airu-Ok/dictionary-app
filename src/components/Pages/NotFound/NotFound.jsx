import React, { Component } from 'react';
import Notfound from '../../../assets/100447-search-not-found.json';
import Lottie from 'react-lottie';
import '../../../App.css';
import { Button } from './NotFoundElements';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none"
}

class NotFound extends Component {
    render(){
        const defaultOptions ={
            loop: true,
            autoplay: true,
            animationData: Notfound,
        };
        return(
            <div className='not-found'>
                <Lottie options={defaultOptions} />
                <p>Lo siento, la página solicitada no se ha podido encontrar.</p>
                <Button>
                <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Ir a home</Link>
                </Button>
            </div>
        );
    }
}

export default NotFound
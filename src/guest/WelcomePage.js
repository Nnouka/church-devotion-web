import React from 'react';
import PublicHeader from './PublicHeader';

export const WelcomePage = (props) => {
    return (
        <div>
            <PublicHeader active={{route: '/'}}/>
            <div className="App-header">
                <h1>{`<Welcome to Church Devotion/>`}</h1>
            </div>
        </div>
    );
}
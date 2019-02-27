import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from './single';

class Main extends Component {
    componentDidMount() {
        console.log('main didmount');
        
        this.props.startLoadingPosts();
    }
    render() {
        return (

            <div>
                <h1>
                    <Link to='/'>Photo</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>)
                } />
                <Route path="/AddPhoto" render={(params) => (
                    <AddPhoto {...this.props} onHistory={params.history}/>
                )
                } />
                <Route path="/single/:id" render={(params) => (
                    <Single {...this.props}  {...params} />
                )
                } />
            </div>

        );
    }
}

export default Main;
import React, {Component} from 'react';
import GoogleMap from '../MapsPage/GoogleMap';


export default class MapTree extends Component{

    render(){
        return(
            <div style = {{width: '100%', textAlign:'center', paddingLeft:'10px'}}>
            <GoogleMap style = {{marginLeft : '10px'}}/>
            </div>
        );
    }
}
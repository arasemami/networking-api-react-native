import React, { Component} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import config from './baseUrl';


class PromiseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   


     loadCached() {
        let url = config.baseurl + config.version + 'article/2';

        const data= {
            method: 'GET',
            headers: {
                "Authorization": config.token,
                "Accept":"application/json", 
            }
        }

        if (url) {
          return Promise.resolve(url); // (*)
        }
      
         fetch(url,data)
          .then(response => response.json())
          .then(resJson => {
          console.log(resJson.data)
          });
      }



    render() { 
        return ( 

            <View>
                <Text>PromiseComponent </Text>
                <TouchableOpacity onPress={this.loadCached.bind(this)}>
                        <Text>Get Data</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default PromiseComponent;
import React, { Component} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import config from './baseUrl';



class FetchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    dataFetching = async() =>{
        console.log("Timer is start!")


        var i = 0;
        var timer = setInterval(() => {
            i = i +1 ;
            console.log(i);
          }, 100);



        const url = config.baseurl + config.version + 'article/2';

        const data= {
            method: 'GET',
            headers: {
                "Authorization": config.token,
                "Accept":"application/json", 
            }
        }

      
        await fetch(url, data)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson.data)
        })
       
        clearInterval(timer);
        console.log("Timer is stop!")
        ;

    }

 
    render() { 
        return ( 

            <View>
                <Text>{config.baseurl}</Text>

                <TouchableOpacity onPress={this.dataFetching.bind(this)}>
                        <Text>Get Data</Text>
                </TouchableOpacity>

            </View>
         );
    }
}
 
export default FetchComponent;
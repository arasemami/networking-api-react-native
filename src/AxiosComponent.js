import React, { Component } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import config from './baseUrl';
import axios from 'axios';




class AxiosComponent extends Component {
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

      
        const response = await axios.get(url,data)
        // const response =  axios.get(url,data)
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.headers);

        })
       
        clearInterval(timer);
        console.log("Timer is stop!")
        ;

    }



    render() { 
        return ( 

            <View>
                <Text>AxiosComponent</Text>

              <TouchableOpacity onPress={this.dataFetching.bind(this)}>
                        <Text>Get Data Axios</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default AxiosComponent;
import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity , Image} from 'react-native'

export default class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'Alex Sander',
                    rating: 5,
                    comment: 'Good',
                    image: require("../asset/avatar1.png")
                },
                {
                    name: 'Trong Thanh',
                    rating: 4,
                    comment: 'Ok',
                    image: require("../asset/avatar2.png")
                },
                {
                    name: 'Huynh Nhu',
                    rating: 2,
                    comment: 'Bad',
                    image: require("../asset/avatar3.png")
                },
                {
                    name: 'Trong That',
                    rating: 5,
                    comment: 'good food good mood',
                    image: require("../asset/avatar4.png")
                },
                {
                    name: 'Ngoc Trai',
                    rating: 4,
                    comment: 'Very good',
                    image: require("../asset/avatar2.png")
                },
                {
                    name: 'Hai Bang',
                    rating: 2,
                    comment: 'normal',
                    image: require("../asset/avatar4.png")
                }
            ]
        }
    }
    handleRating = (item) => {
        let rating = [];
        for(i = 0; i < item; i++){
            rating.push(
                <Image source={require("../asset/star2.png")} 
                    style={{width:15, height:15, marginRight:3}}
                    resizeMode="cover"
                />
            )
        }
        return rating;
    }
    renderItemPopular =({item}) => {
        return (
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={item.image} style={{height:80, width:80, borderRadius:40, borderWidth:2, borderColor:'green'}}/>
                <Text style={{color:'green', fontWeight:'bold'}}>{item.name}</Text>
                <View style={{flexDirection:'row'}}>
                    {this.handleRating(item.rating)}
                </View>
                <Text numberOfLines={2} style={{fontStyle:'italic', marginTop:5}}>"{item.comment}"</Text>
            </View>
        )
    }
    ItemSeparatorComponent = () => {
        return (
            <View style={{height:10}}/>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItemPopular}
                    keyExtractor={(item, index) => index.toString}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    numColumns={3}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        marginTop:20,
        marginBottom:10
    }
})

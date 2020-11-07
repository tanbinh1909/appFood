import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    type: 'Dessert',
                    color: '#f7931e',
                    data:[
                        {
                            name:'Stewed Mushrooms',
                            image: require("../asset/namkho.jpg"),
                            price: "$12"
                        },
                        {
                            name:'Jackfruit Fried',
                            image: require("../asset/mitkho.jpg"),
                            price: "$15"
                        }
                    ]
                },
                {
                    type: 'Main course',
                    color: '#39b54a',
                    data:[
                        {
                            name:'Noodles',
                            image: require("../asset/hutieu.jpg"),
                            rating: 4,
                            price: "$20"
                        },
                        {
                            name:'Beef',
                            image: require("../asset/cuonlalot.jpg"),
                            rating: 2,
                            price: "$12"
                        },
                        {
                            name:'Salad dressing',
                            image: require("../asset/cuondiep.jpg"),
                            rating: 5,
                            price: "$13"
                        },
                    ]
                },
                {
                    type: 'Other',
                    color: '#ed1e79',
                    data:[
                        {
                            name:'Salad dressing',
                            image: require("../asset/cuondiep.jpg"),
                            price: "$13"
                        },
                        {
                            name:'Jackfruit warehouse',
                            image: require("../asset/mitkho.jpg"),
                            price: "$15"
                        }
                    ]
                },
            ]
        }
    }

    renderItemType = ({item}) => {
        const {props} = this.props;
        return (
            <TouchableOpacity style={{flex:1, alignItems:'center'}} onPress={() => props.navigation.navigate("Detail",{item})}>
                <Image source={item.image} style={{width:80, height:80, borderRadius:10, borderWidth:2, borderColor:'white'}}/>
                <Text style={{marginTop:10, color:'white', fontSize:15}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    ItemSeparatorComponent = ()=> {
        return(
            <View style={{width:10}}/>
        )
    }
    ItemSeparatorComponentMenu = () => {
        return(
            <View style={{height:10}}/>
        )
    }
    renderItemMenu = ({item}) => {
        return (
            <View style={{flex:1}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color: item.color}}>{item.type}</Text>
                    <View style={{marginTop:10, flexDirection:'row', paddingHorizontal:10, paddingVertical:10, borderRadius:10, backgroundColor:item.color}}>
                        <FlatList
                            data={item.data}
                            renderItem={this.renderItemType}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            ItemSeparatorComponent={this.ItemSeparatorComponent}
                        />
                    </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItemMenu}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.ItemSeparatorComponentMenu}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10
    }
})

import React, { Component } from 'react'
import { Text, 
    StyleSheet, 
    View, 
    ImageBackground, Dimensions, Image , TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default class Detail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {item} = this.props.route.params;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <ImageBackground source={require("../asset/header_detail.png")} style={{flex:1, alignItems:'center'}} resizeMode="stretch">
                    <View style={styles.image_container}>
                        <Image 
                        source={item.image}
                        style={{width:'100%', height:'100%', borderWidth:5, borderColor:'white', borderRadius:height_image/2}}/>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute', left:0, marginTop:20 ,marginLeft:15}}>
                    <Image source={require("../asset/arrow-left.png")} style={{width:40, height:40, tintColor:'white'}}
                        resizeMode="cover"
                    />
                    </TouchableOpacity>
                </ImageBackground>
                <ScrollView style={styles.footer} showsVerticalScrollIndicator={false}>
                    <View style={{width:100, justifyContent:'center', alignItems:'center', borderRadius:30, borderWidth:1, paddingVertical:3, borderColor:'green'}}>
                        <Text style={{color:"green"}}>MÓN ĂN</Text>
                    </View>
                    <Text style={{color:'green', fontWeight:'bold', fontSize:30, marginTop:20}}>{item.price}</Text>
                    <Text numberOfLines={2} style={{color:'#3e3c3e', fontWeight:'bold', fontSize:45, marginTop:5}}>{item.name.toUpperCase()}</Text>
                    <Text style={{color:'gray', fontSize:15, marginTop:18}}>dadsdasdsad</Text>
                    <LinearGradient 
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}} 
                        colors={['#4CAF50', '#81C784']}
                        style={{justifyContent:'center', alignItems:'center', marginTop:30, paddingHorizontal:10, borderRadius:100, height:40, marginBottom:10}}>
                            <Text style={{color:'white', fontWeight:"bold", fontSize:18}}>Đặt ngay</Text>
                    </LinearGradient>
                </ScrollView>
            </View>
        )
    }
}
const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    footer: {
        flex:1,
        paddingHorizontal:40,
    },
    image_container: {
        height: height_image,
        width: height_image,
        marginTop: height_image/3
    }
})

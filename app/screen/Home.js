import React, { Component } from 'react'
import { Text,
    StyleSheet, 
    View ,
    ImageBackground,
    Dimensions, 
    KeyboardAvoidingView, 
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity} from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import All from '../screen/All';
import Menu from '../screen/Menu';
import Popular from '../screen/Popular';
import KeyboardSpacer from 'react-native-keyboard-spacer';
export default class Home extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground source={require("../asset/header.png")} style={styles.imageBackground}>
                            <Text style={styles.title}>Móm Ăn</Text>
                        </ImageBackground>
                        <View style={{marginTop:'1%', marginLeft:'2%'}}>
                            <TouchableOpacity style={{
                                backgroundColor:'#F4511E', height:40 , width:90, 
                                justifyContent:'center', alignItems:'center', borderRadius:5}}>
                                <Text style={{fontWeight:'bold', color:'white'}}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tabbar}>
                        <ScrollableTabView
                            style={{ marginTop: 20 }}
                            initialPage={0}
                            tabBarActiveTextColor="green"
                            renderTabBar={() => <ScrollableTabBar />}
                        >
                            
                            <All tabLabel="Tất cả" props={this.props}/>
                            <Menu tabLabel="Menu" props={this.props}/>
                            <Popular tabLabel="Phổ biến" props={this.props}/>
                            <All tabLabel="Tất cả" props={this.props}/>
                            <Menu tabLabel="Menu" props={this.props}/>
                            <Popular tabLabel="Phổ biến" props={this.props}/>
                            <All tabLabel="Tất cả" props={this.props}/>
                            <Menu tabLabel="Menu" props={this.props}/>
                            <Popular tabLabel="Phổ biến" props={this.props}/>
                        </ScrollableTabView>
                    </View>
                    
                </View>
                        
            
        )
    }
}
const width = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header: {
        marginTop:20,
        position:'absolute',
        flexDirection:'row'
    },
    tabbar: {
        flex:1,
        marginTop: width*0.3,
        paddingHorizontal:30
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems:'center',
    },
    title: {
        color:'white',
        marginTop:25,
        fontWeight:'bold',
        fontSize:25
    }
})

import React, { Component } from 'react'
import { Text, 
    StyleSheet, 
    View , 
    FlatList, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    ActivityIndicator, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, Platform} from 'react-native'
import {dataAll} from '../data_all';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Icon } from 'native-base';
const data = [
    {
        name:'Stewed Mushrooms',
        image: require("../asset/namkho.jpg"),
        rating: 3,
        price: "$12"
    },
    {
        name:'Jackfruit Fried',
        image: require("../asset/mitkho.jpg"),
        rating: 5,
        price: "$15"
    },
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
export default class All extends Component {
    constructor(props){
        super(props);
        this.state = {
            listFood: [],
            data_item : [],
            search: "",
            loading: false
        }
    }
    UNSAFE_componentWillMount = () => {
        setInterval(() => {
            this.setState({listFood: data, data_item: data, loading: true})
        }, 1000);
    }
    handleRating = (item) => {
        let rating = [];
        for(let i = 0; i< item; i++){
            rating.push(
                <Image source={require("../asset/star.png")} style={{width:15, height:15, marginRight:3}}
                    resizeMode="cover"
                />
            )
        }
        return rating;
    }
    renderItemCompoment = ({item}) => {
        const {props} = this.props;
        return (
            <LinearGradient 
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}} 
                colors={['#4CAF50', '#81C784']}
                style={styles.item}>
                <View style={styles.image_container}>
                    <Image source={item.image} style={styles.image}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.rating}>
                        {this.handleRating(item.rating)}
                    </View>
                    <View style={styles.price_container}>
                        <View style={styles.price}>
                            <Text style={styles.textPrice}>{item.price}</Text>
                        </View>
                    </View>
                 </View>
                 <TouchableOpacity style={styles.button} onPress={() =>props.navigation.navigate("Detail",{item})}>
                    <Image source={require("../asset/arrow-right.png")} style={{width:15, height:15}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </LinearGradient>
        )
    }
    ItemSeparatorComponent = () => {
        return (
            <View style={{height:10}} />
        )
    }
    handleSearch = (search) => {
        
        // this.setState({loading: false})
        let data = [];
        this.state.data_item.map((value) => {
            if (value.name.indexOf(search) > -1) {
                data.push(value)
            }else {

            }
        })
        setInterval(() => {
            this.setState({listFood: data, search, loading: true});
            // Keyboard.dismiss();
        }, 2000)
        
    }
    render() {
        
        return (
                <View style={styles.container}>
                    {/* <View style={styles.search}>
                        <TextInput 
                            placeholder="Tìm món ăn..."
                            style={{flex:1, marginLeft:10}}
                            value={this.state.search}
                            onChangeText={(search) => this.handleSearch(search)}
                        />
                        <TouchableOpacity onPress={() => this.handleSearch("")} style={{paddingHorizontal:5}}>
                            <Ionicons name="ios-close" color="gray" size={20}/>
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.flastList}>
                        {this.state.loading  == false ?( <ActivityIndicator size="large" color="#00ff00"/>) :
                        (  this.state.listFood.length > 0 ) ?(
                            <FlatList
                                data={this.state.listFood}
                                renderItem={this.renderItemCompoment}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={this.ItemSeparatorComponent}
                                showsVerticalScrollIndicator={false}
                        />
                        ): (
                            <View>
                                <Text style={{alignItems:'center'}}>Không có món ăn nào</Text>
                            </View>
                        )}
                    </View>
                        </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        paddingBottom:5
    },
    flastList: {
        flex:1,
        marginTop:10,
    },
    item: {
        flex:1,
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        borderColor:10,
        borderRadius:5
    },
    image_container: {
        width:90,
        height:90,
    },
    image: {
        width:'100%',
        height:'100%',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10
    },
    content: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10
    },
    name: {
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    rating: {
        marginTop:5,
        flexDirection:'row'
    },
    button: {
        width:30,
        height:30,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    price_container: {
        flexDirection:'row',
        marginTop:10
    },
    price: {
        backgroundColor:'white',
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:50
    },
    textPrice:{
        color:'green',
        fontWeight:'bold',

    },
    search: {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:1,
        paddingHorizontal:10,
        borderRadius:5,
        backgroundColor:'#f2f2f2',
        marginTop:10,
        height:40
    }
})

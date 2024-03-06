import React from "react";
import { Image, Text, View, TextInput,FontAwesome5 } from "react-native";
import {Octicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';

export default function Homie() {
    return (
        <View style={{flexDirection:"column",flex:1}}>
            <View style={{flex : 1, backgroundColor : '#F0C064' }}>
                <View style={{alignItems:"flex-end" , margin:15, paddingTop:15}}>
                <Octicons name="feed-person" size={30} color="#D36A64"  />
                </View>
            </View>
            <View style={{flex : 5}}>
                <View style={{flex:1, backgroundColor:"#EBEBEB",borderTopStartRadius:40,borderTopEndRadius:40,marginTop:-40}}>
                    <Text style={{color:"black",fontSize:20,marginTop:10,marginStart:30,marginTop:20}}>Search for Lost Pets</Text>
                    <View>
                        <TextInput style={{fontSize:12,paddingLeft:15,textAlign:"left",backgroundColor:"white",borderRadius:10,marginHorizontal:30,marginTop:10,height:35}} 
                    // keyboardType="string" 
                    placeholder="Search..."     />
                        {/* <EvilIcons name="search" size={24} color="black" /> */}
                    </View>
                    <View style={{flexDirection:"row",marginTop:10,marginStart:30}}>
                        <View style={{backgroundColor:"white",borderRadius:5, flexDirection:"row",width:70,justifyContent:"center",alignItems:"center"}}>
                         <MaterialCommunityIcons name="dog" size={18} color="black" />
                         <Text style={{marginStart:5,fontSize:14}}>DOG</Text>
                        </View>
                        <View style={{backgroundColor:"white",borderRadius:5, flexDirection:"row",width:70,justifyContent:"center",alignItems:"center",marginLeft: 10}}>
                        <MaterialCommunityIcons name="cat" size={18} color="black" />
                        <Text style={{marginStart:5,fontSize:14}}>CAT</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:"white",borderRadius:60,width:100,marginStart:30, marginTop:10,borderBlockColor:"gray",borderWidth:1}}> 
                    <Text style={{textAlign:"center"}}>20 kms</Text>
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"row",marginTop:10,marginHorizontal:30,justifyContent:"space-between"}}>
                            <View style={{backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                                <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/cat4.jpg")} />
                                <Text style={{marginLeft:10}}>Charlie</Text>
                            </View>
                            <View style={{marginLeft:10,backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                            <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/01-6.jpg")} />
                            <Text style={{marginLeft:10}}>aideng</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10,marginHorizontal:30,justifyContent:"space-between"}}>
                            <View style={{backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                            <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/cat_cafe_1.jpg")} />
                            <Text style={{marginLeft:10}}>princess</Text>
                            </View>
                            <View style={{marginLeft:10,backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                            <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/cute-dog-so-wallpaper-preview.jpg")} />
                            <Text style={{marginLeft:10}}>aibo</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10,marginHorizontal:30,justifyContent:"space-between"}}>
                            <View style={{backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                            <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/catblog1 (1).jpg")} />
                            <Text style={{marginLeft:10}}>charlid</Text>
                            </View>
                            <View style={{marginLeft:10,backgroundColor:"white", height:180,width:190,borderRadius:10}}>
                            <Image style={{ width: 170, height: 80, borderRadius:10, margin:10,justifyContent:"center",alignItems:"center"}} source={require("../assets/dogcover.jpg")} />
                            <Text style={{marginLeft:10}}>phatong</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
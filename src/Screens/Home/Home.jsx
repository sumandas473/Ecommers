
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView,Button } from "react-native";
import React from 'react'




export default function Home(props) {
    return (
    <ScrollView>
        <View >
            <View style={{ flexDirection: "row", padding: 20, display: 'flex', justifyContent: 'space-between' }}>
                <View style={styles.address}>
                    <Text style={{ fontWeight: 300, fontSize: 11 }}>Delivery address</Text>
                    <Text style={{ fontWeight: 900, fontSize: 15 }}>XYZ city, XYZ State</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.headerbutton}>
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/Buy.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerbutton}>
                        <Image style={{ height: 24, width: 21 }} source={require('../../assets/Notification.png')} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.inputcontainer}>
                <Image style={{ height: 20, width: 20 }} source={require('../../assets/search.png')} />
                <TextInput style={{ height: 20, width: '90%', marginLeft: 10, paddingRight: 10, }} placeholder="Search.." />
            </View>

            <View >

                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row', paddingTop: 15, height: 200 }}>


                    <View style={{ width: 320, height: '100%', borderRadius: 20, backgroundColor: 'red', marginLeft: 20, overflow: 'hidden', }}>
                        <Image source={require('../../assets/banner 1.jpg')} style={{ height: '100%', width: '100%', objectFit: 'cover', }} />
                    </View>

                    <View style={{ width: 320, height: '100%', borderRadius: 20, backgroundColor: 'red', marginLeft: 20, overflow: 'hidden', }}>
                        <Image source={require('../../assets/cartoon.jpg')} style={{ height: '100%', width: '100%', objectFit: 'cover', }} />
                    </View>


                    <View style={{ width: 320, height: '100%', borderRadius: 20, backgroundColor: 'red', marginLeft: 20, marginRight:20, overflow: 'hidden', }}>
                        <Image source={require('../../assets/banner 1.jpg')} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </View>




                </ScrollView>

            </View>

            <Text style={{ padding: 18, fontWeight: 500, fontSize: 20 }}>Catagory</Text>

            <View style={{ width: '100%', height: 80, backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>


                <View style={{ alignItems: 'center', width: 60, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('web')} style={{ width: '100%', height: '70%', borderRadius: 20, backgroundColor: '#EDF7FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/fashion 1.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13 }}>Apparel</Text>

                </View>

                <View style={{ alignItems: 'center', width: 60, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '100%', height: '70%', borderRadius: 20, backgroundColor: '#E9FFF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/fashion 2.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13 }}>School</Text>

                </View>

                <View style={{ alignItems: 'center', width: 60, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '100%', height: '70%', borderRadius: 20, backgroundColor: '#FFEDDD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/fashion 2 (1).png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13 }}>Sports</Text>

                </View>


                <View style={{ alignItems: 'center', width: 60, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '100%', height: '70%', borderRadius: 20, backgroundColor: '#EDF7FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/fashion 2 (2).png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13 }}>Electronic</Text>

                </View>

                <View style={{ alignItems: 'center', width: 60, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ width: '100%', height: '70%', borderRadius: 20, backgroundColor: '#E9FFF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/Category.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13 }}>All</Text>

                </View>









            </View>

            <View style={{ padding: 18, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>Recent product</Text>

                <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8, borderWidth: 1, borderRadius: 10, borderColor: '#9fa0a1' }}>
                    <Text >Filter</Text>
                    <Image style={{ height: 20, width: 20, marginLeft: 12 }} source={require('../../assets/filter.png')} />
                </TouchableOpacity>

            </View>


            <SafeAreaView style={{}}>
                
                    <View style={{ height: 250, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                                <Image source={require('../../assets/img (2).png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                            <Image source={require('../../assets/img (3).png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 250, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                            <Image source={require('../../assets/img (4).png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                            <Image source={require('../../assets/img (5).png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                    </View>


                    <View style={{ height: 250, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                            <Image source={require('../../assets/img.png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                        <View style={{ height: '100%', width: '45%', backgroundColor: '#454443', borderRadius: 12,overflow:'hidden' }}>
                            <View style={{ height: '60%', width: '100%', backgroundColor: '#454443' }}>
                            <Image source={require('../../assets/img (1).png')} style={{height:'100%', width:'100%'}}/>
                            </View>
                            <View style={{ height: '40%', width: '100%', backgroundColor: '#afb0b3',alignItems:'center',justifyContent:'space-around' }}>
                                <Text>Name</Text>
                                <Text>Price</Text>
                                <TouchableOpacity style={{paddingHorizontal:'20%',paddingVertical:'5%', backgroundColor:'#67C4A7',width:'80%',borderRadius:10,}}><Text style={{color:'white'}}>Add to cart</Text></TouchableOpacity>
                                
                                
                            </View>
                        </View>
                    </View>

                   

                
            </SafeAreaView>

            {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>

                <View>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 33, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/Home.png')} />
                    </TouchableOpacity>
                    <Text style={{ opacity: 0.5 }}>Home</Text>
                </View>

                <View>
                    <TouchableOpacity style={{ height: 40, width: 40,  borderRadius: 33, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/Heart.png')} />
                    </TouchableOpacity>

                    <Text style={{ opacity: 0.5 }}>Wishlist</Text>
                </View>

                <View>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 33, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style={{ height: 24, width: 20 }} source={require('../../assets/Paper.png')} />
                    </TouchableOpacity>
                    <Text style={{ opacity: 0.5 }}>History</Text>
                </View>

                <View>
                    <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 33, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style={{ height: 24, width: 20 }} source={require('../../assets/Profile.png')} />
                    </TouchableOpacity>
                    <Text style={{ opacity: 0.5 }}>Account</Text>
                </View>


            </View> */}






        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    address: {

    },
    headerbutton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        // backgroundColor: '#b5b2b1',
        borderRadius: 33,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputcontainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9fa0a1'

    }




});
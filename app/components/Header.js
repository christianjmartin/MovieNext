import React, { useContext } from 'react';
import camera4 from '../assets/camera4.png';
import camera5 from '../assets/camera5.png';
import settings from '../assets/settings-2.png';
import PageContext from '../context/PageContext';  
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 

// header for app (red)
export default function Header() {
    const {updatePage, page} = useContext(PageContext);
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <Image source={camera4} style={styles.logo} /> 
            <View style={styles.invisiblePadding}></View>
            {/* <Text style={styles.title}>MovieNext</Text> */}
            <View style={styles.spacer}></View>

            {/* only allow user to leave reccomendation screen by exit button, since theres no going back wihtout re-entry */}
            {/* {page != "Show Swiper" ?  */}
            <TouchableOpacity onPress={() => {
                navigation.navigate("Settings");
                updatePage("Settings");
            }}>
            {page != "Settings" ? <Image source={settings} style={[styles.image, styles.settings]}></Image> : null}
            
            </TouchableOpacity>
            {/* : null } */}
        </View>
    );
};

const styles = StyleSheet.create ({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        backgroundColor: '#A44443',
    },
    title: {
        fontFamily: 'Jakarta-sans',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    invisiblePadding: {
        padding: 20,
    },
    image: {
        width: 40,
        height: 40,
    },
    logo: {
        width: 40,
        height: '100%',
        marginLeft: 8,
    },
    settings: {
        marginRight: 5,
    },
    spacer: {
        flexGrow: 1,
    }
});
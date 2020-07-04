import React from 'react'
import { View,Text, ImageBackground, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";


const Home: React.FC = () => {

    const navigation = useNavigation()


    function handleGoToNavigation(){
        navigation.navigate('Register')
    }

    return(
        <ImageBackground  source={require('../../assets/image-bg.png')}
           imageStyle={{
               width: 228,
               height: 308,
               marginLeft: 90,
               marginTop: 50,
               justifyContent: 'center',
               alignItems: 'center'
           }}
           style={styles.container}
        >
            <View style={styles.main}>
                <Text style={styles.title}>Halo App!</Text>
                <Text style={styles.description}>Crie uma conta rápido e simples e entre no global</Text>
            </View>
            <View style={{marginBottom: 50}}>

                <RectButton style={styles.button} onPress={() => console.log('clicou')}>
                    <View style={styles.iconButton}>
                        <Text>
                            <Icon name="arrow-right" size={24} color="#fff"/>
                        </Text>
                    </View>
                    <Text style={styles.titleButton}>Entrar</Text>
                </RectButton>
                <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={styles.register} onPress={handleGoToNavigation} >
                        Cadastrar
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
    },
    main: {
        flex: 1,
        justifyContent: "center"
    },
    title:{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 35,
        marginLeft: 100,
        marginTop: 250
    },
    description: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 17
    },
    button: {
        backgroundColor: '#F25C69',
        height: 60,
        flexDirection: "row",
        borderRadius: 8,
        overflow: "hidden",
        alignItems: 'center',
    },
    iconButton: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleButton: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 100

    },
    register: {
        color: '#F25C69',
        marginTop: 30,
        fontSize: 18
    },

})

export default Home
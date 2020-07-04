import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, StyleSheet, TextInput} from "react-native";

import Constants from 'expo-constants'

import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import api from '../../services/api'





const Register: React.FC = () => {

    const [image, setImage] = React.useState()
    const [name, setName] = useState<String>()
    const [email, setEmail] = useState<String>()
    const [password, setPassword] = useState<String>()

    async function imagePickerCall(){
        if(Constants.platform?.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if(status !== 'granted'){
                alert("Permission is required")
                return;
            }
        }
        const result = await ImagePicker.launchImageLibraryAsync({})
        
        if(result.cancelled === false){
            const data = {
                localUri: result.uri
            }

            setImage(data)
        }
    }

      function handleSubmit(){
        const data = new FormData()

        // data.append('name', String(name))
        // data.append('email', String(email))
        // data.append('password', String(password))

        // data.append('image', {
        //     String.type: 
        // })
        
        
        // const response = await api.post('/users', data)
        
    }

    return(
        <View>
            <Text>Registrar</Text>
            <Image source={{
                uri: image
                ? image.uri
                : 'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png'
                }} style={styles.avatar} 
                    
            />
            <Button title="Escolha uma imagem" onPress={imagePickerCall} />

            <View>
                <Text>Nome</Text>
                <TextInput 
                    onChangeText={value => setName(value)}
                    placeholder="Nome"
                />
                <Text>Email</Text>
                <TextInput 
                    onChangeText={value => setEmail(value)}
                    placeholder="Nome"
                />
                <Text>password</Text>
                <TextInput 
                    onChangeText={value => setPassword(value)}
                    placeholder="Nome"
                />
            </View>

            <Button title="Cadastar" onPress={handleSubmit}/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    avatar: {
        borderRadius: 70,
        width: 128,
        height: 128
    }
})

export default Register
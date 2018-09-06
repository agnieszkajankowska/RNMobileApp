import React from 'react';
import { View, Button, TextInput } from 'react-native';

class Login extends React.Component {
    render() {
        const submitLogin = () => {
            console.log("submit loging");
        }

        return(
            <View style={{padding: 10}}>
                <TextInput placeholder="Code" style={{height: 60}}/>
                <Button title="Login" onPress={submitLogin} color="#00816d"/>
            </View>
        )
    }
}

export default Login;

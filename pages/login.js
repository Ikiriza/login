import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome name="graduation-cap" size={50} color="blue" />
                <Text style={styles.logoText}>Edutech</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome Back</Text>

            <TextInput
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>Don't have an account? Sign up</Text>

            <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="facebook-square" size={20} color="blue" />
                <Text style={styles.socialText}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={20} color="red" />
                <Text style={styles.socialText}>Login with Google account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        paddingLeft: 10,
    },
    loginButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    signupText: {
        marginVertical: 10,
        textAlign: 'center',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    socialText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

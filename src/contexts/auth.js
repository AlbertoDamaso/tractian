import React, { useState, createContext, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [findUser, setFindUser] = useState(null);

    async function signIn(email){
        
        if(email == ''){
            alert('Digite um e-mail valido!');
            setLoadingAuth(false);
            return;
        }
        
        setLoadingAuth(true);
        try{
            const resp = await api.get('/users');
            setUser(resp.data);
            
            setFindUser(user.filter(function(item){
                return (item.email == email);
            }))
            console.log(findUser);
        }
        catch(error){
            alert('ERROR: '+ error);
            setLoadingAuth(false);
        }
        finally{
            if(findUser != '' && findUser != undefined ){
                navigation.navigate('AppRoutes');
            }else{
                alert('Email não cadastrado!');
            }
            setLoadingAuth(false);
        }
    }

    useEffect(()=> {
        async function saveStorage(){
            await AsyncStorage.setItem('Auth_user', JSON.stringify(findUser));
        }

        saveStorage();

    }, [findUser]);    

    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
 
            if(storageUser){
                setFindUser(JSON.parse(storageUser));
                setLoading(false);
            }
 
            setLoading(false);
        }
        
        loadStorage();
     }, []);


    async function signOut(){
        await AsyncStorage.clear()
        try{
           setUser(null);
        }catch(error){
            alert("Error: "+error);
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user, loading, signIn, signOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
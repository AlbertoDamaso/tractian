import React, { useState, createContext } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigation = useNavigation();

    const [user, setUser] = useState({});
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signIn(email){
        if(email !== ''){
            try{
                const resp = await api.get('/users/1');
                setUser({
                    id:resp.data.id,
                    email:resp.data.email,
                    name: resp.data.name,
                    unitId: resp.data.unitId,
                    companyId: resp.data.companyId
                });
                navigation.navigate('AppRoutes');
            }
            catch(error){
                alert('ERROR: '+ error);
                setLoadingAuth(false);
            }
        }else{
            alert('Digite um e-mail valido!');
            setLoadingAuth(false);
            return;
        }
    }

    async function signOut(){
        try{
           setUser(null);
        }catch(error){
            alert("Error: "+error);
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user, signIn, signOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
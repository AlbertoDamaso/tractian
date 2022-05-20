import React, { useState, createContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [findUser, setFindUser] = useState(null);
    const [allUser, setAllUser] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signIn(email){

        if (email == ''){
            alert("Digite um e-mail valido!");
            setUser(null);
            return;
        }else{
                try{
                    const resp = await api.get('/users')
                    setAllUser(resp.data);
                    
                    setFindUser(allUser.find( ({ email }) => email === email ));
                    const findId =  findUser.id;

                    //Original part
                    setLoadingAuth(true);
                    await api.get(`/users/${findId}`)// buscar o certo antes
                    .then(async (value) =>{
                        let data ={
                            id: value.data.id,
                            email:value.data.email,
                            name: value.data.name,
                            unitId: value.data.unitId,
                            companyId: value.data.companyId
                        };
                        setUser(data);
                        setLoadingAuth(false);
                    })
                    .catch((error) => {
                        alert(error.code);
                        setLoadingAuth(false);
                    })
                }catch(error){
                    alert(error);
                    setLoadingAuth(false);
                }
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
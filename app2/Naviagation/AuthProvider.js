import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import { createContext,useState } from 'react';
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
return(
    <AuthContext.Provider
    value={{
        user,
        setUser,
        login:async(email,password)=>{
         try{
               await auth()
               .signInWithEmailAndPassword(email,password);
          }catch(e){
            console.log(e);
        }
        },
        googlelogin:async()=>{
            try{
                await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                // Get the users ID token
                const { idToken } = await GoogleSignin.signIn();

                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                // Sign-in the user with the credential
                await auth().signInWithCredential(googleCredential);
            }catch(e){
                console.log(e);
            }

        },
        fblogin: async()=>{
            try{
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                if (result.isCancelled) {
                  throw 'User cancelled the login process';
                }
              
                // Once signed in, get the users AccesToken
                const data = await AccessToken.getCurrentAccessToken();
              
                if (!data) {
                  throw 'Something went wrong obtaining access token';
                }
              
                // Create a Firebase credential with the AccessToken
                const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
              
                // Sign-in the user with the credential
                await auth().signInWithCredential(facebookCredential);
              }
            catch(e){
                console.log(e);
            }
        },
        

        register: async (email,password) =>{
                await auth()
                    .createUserWithEmailAndPassword(email,password)
                    .then(()=>{alert('user is Created');
                })
                    .catch(error =>{
                        if(error.code ==='auth/email-already-in-use'){
                            alert("That email is already in use");
                        }
                        if(error.code ==='auth/invalid-email'){
                            alert("That email address is invalid");
                        }
                        console.error(error);
                });

           
        },
        logout: async() =>{
            try{
                await auth().signOut();
                //navigation.navigate('Login');
            }catch(e){
                console.log(e);
            }
        },
    }}
    >
        {children}
    </AuthContext.Provider>
);
};
export default AuthProvider;
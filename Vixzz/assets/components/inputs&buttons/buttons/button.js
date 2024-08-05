import { View, Text, StyleSheet, Pressable } from 'react-native'
import { auth } from '../../../../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Button(props) {

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, "vgss4@aluno.ifal.edu.br", "pwvitor")
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode)
                console.error(errorMessage)
            });
    }

    return (
        <View>
            <Pressable style={[styles(props.bg).button, styles(props.border).border]} onPress={handleLogin}>
                <Text style={[styles.textButton, styles(props.color).textButton]}>{props.text}</Text>
            </Pressable>
        </View>
    )
}


const styles = (bool) => StyleSheet.create({
    textButton: {
        color: bool ? "#fff" : "#633C8E",
        fontSize: 20,
        fontFamily: "Poppins_500Medium"
    },
    button: {
        backgroundColor: bool ? "#633C8E" : "transparent",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    border: {
        borderWidth: bool ? 1 : 0,
        borderColor: "#633C8E",
    }
})
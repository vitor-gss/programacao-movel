import { View } from 'react-native'
import Circle from '../assets/components/elements/circle'
import Title from '../assets/components/text/title'
export default function SplashScreen() {
    return (
        <View>
            <Circle bg={'#633C8E'} right={60} />
            <Circle bg={'#ffea00'} left={310} />
            <Title text='Acesse sua conta' color='#633C8E' size={30} />
        </View>
    )
}
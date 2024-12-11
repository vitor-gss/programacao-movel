import { View } from 'react-native'
import Circle from '../assets/components/elements/circle'
import Title from '../assets/components/text/title'
import Colors from './styles/colors'
export default function SplashScreen() {
    return (
        <View>
            <Circle bg={Colors.primaryColor} right={60} />
            <Circle bg={'#ffea00'} left={310} />
            <Title text='Acesse sua conta' color={Colors.primaryColor} size={30} />
        </View>
    )
}
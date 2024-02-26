import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <FontAwesome style={styles.icon} name="pencil-square-o" size={26} />
                <Text style={styles.titleOne}>ta</Text>
                <Text style={styles.titleTwo}>sk</Text>
            </View>

        </View>
    )
}
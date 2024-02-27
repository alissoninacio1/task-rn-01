import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <FontAwesome style={styles.icon} name="pencil-square-o" size={28} />
                <Text style={styles.titleOne}>ta</Text>
                <Text style={styles.titleTwo}>sk</Text>
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Add a new task"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button}>
                <AntDesign style={styles.plus} name="pluscircleo"  />
                </TouchableOpacity>
            </View>

        </View>
    )
}
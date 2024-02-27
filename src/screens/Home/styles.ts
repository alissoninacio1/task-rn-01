import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",

    },
    boxTitle: {
        flexDirection: "row",
        paddingVertical: 20,  
    }, 
    titleOne: {
        color: "#50C4ED",
        fontSize: 26,
        fontWeight: "bold",
        
    },
    titleTwo: {
        color: "#836FFF",
        fontSize: 26,
        fontWeight: "bold"
    },
    icon: {
        color: "white",
        alignSelf: 'center',
        paddingHorizontal: 5,
        marginTop: 5
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 20,
        gap: 5,
        justifyContent: 'center'

    },
    input: {
        width: '70%',
        height: 46,
        backgroundColor: '#383838',
        color: '#fff',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
    },
    plus: {
        color: "#fff",
        fontSize: 16,
    },
    button: {
        width: 46,
        height: 46,
        borderRadius: 5,
        backgroundColor: "#50C4ED",
        alignItems: 'center',
        justifyContent: 'center'
    }
})


//adicionar um darkmode toggle



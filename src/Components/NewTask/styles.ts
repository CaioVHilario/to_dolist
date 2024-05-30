import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 54,
        fontSize: 18,
        borderRadius: 6,
        backgroundColor: "#292929",
        color: "#fff",
        padding: 16,
        marginRight: 8,
    },
    newTask:{
        flexDirection: "row",
        marginTop: -27,
        width: '100%',
    },
    addTask: {
        height: 54,
        width: 54,
        borderRadius: 6,
        backgroundColor: "#1e6f9f",
        justifyContent: 'center',
        alignItems: "center",
    },
    addText: {
        fontSize: 32,
        color: "#fff"
    }
})
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
    trashButon: {
        width: "15%",
        alignItems: "center"
    },
    checkedButon: {
        width: "15%",
        alignItems: "center"
    },
    newTask:{
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 8,
        height: 64,
        marginBottom: 20,
        backgroundColor: "#262626",
        // width: '100%',
    },
    addTask: {
        height: 64,
        borderRadius: 6,
        backgroundColor: "#262626",
        justifyContent: 'center',
        alignItems: "center",
    },
    addText: {
        fontSize: 14,
        color: "#fff"
    },
    task: {
        width: "70%",
    },
    Unchecked: {
        // marginHorizontal: 12,
    },
    addTextChecked: {
        fontSize: 14,
        color: "#808080",
        textDecorationLine: 'line-through'
    }
})
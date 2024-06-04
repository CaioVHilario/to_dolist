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
        // borderColor: "#fff",
        borderWidth: 1,
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
        color: "#fff",
        width: '50%',
    },
    task: {
        width: "70%",
    },
    Unchecked: {
        // marginHorizontal: 12,
    },
    addTextChecked: {
        fontSize: 14,
        width: '50%',
        color: "#808080",
        textDecorationLine: 'line-through'
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
      },
    modalView: {
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#1e6f9f',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: "#fff",
        textAlign: 'center',
    },
    slider: {
        height: 45,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50,
        justifyContent: "center"
    },
    textSlider: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addTextRange: {
        fontSize: 14,
        width: '50%',
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'right'
    },
    addTextRangeChecked: {
        fontSize: 14,
        width: '50%',
        fontWeight: "bold",
        color: "#808080",
        textDecorationLine: 'line-through',
        textAlign: 'right'
    },
    taskRange: {
        flexDirection: 'row',
    }
})
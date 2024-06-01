import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "#191919",
        paddingHorizontal: 36,
    },
    container: {
        height: 150,
        width: 400,
        alignSelf: "center",
        justifyContent: 'center',
        backgroundColor: '#0d0d0d',
    },
    logoTodo: {
        alignSelf: 'center',
    },
    infoTasks: {
        flexDirection: "row",
        marginTop: 25,
        marginBottom: 20,
    },
    textCreated: {
        color: "#4EA8DE",
        fontSize: 14,
        fontWeight: "bold"
    },
    textFineshed: {
        color: "#8284FA",
        fontSize: 14,
        fontWeight: "bold",
    },
    numberView: {
        backgroundColor: "#333333",
        borderRadius: 999,
        marginLeft: 8,
    },
    textNumber: {
        color: "#fff",
        fontWeight: "bold",
    },tasksAlignCreated: {
        flexDirection: "row",
        width: "50%"
    },
    tasksAlignFineshed: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "50%"
    },
    tasks: {
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#808080"
    },
    textNotTask: {
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 14,
        color: "#808080"
    },
    textNotTask2: {
        fontSize: 14,
        color: "#808080"
    },
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

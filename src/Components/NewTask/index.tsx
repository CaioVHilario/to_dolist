import React from "react";
import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function NewTask() {
    return(
        <View style={styles.newTask}>

                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6B6B6B"
                    />

                <View style={styles.addTask}>
                    <TouchableOpacity >
                        <Text style={styles.addText}> + </Text>
                    </TouchableOpacity>
                </View>

            </View>
    )
}
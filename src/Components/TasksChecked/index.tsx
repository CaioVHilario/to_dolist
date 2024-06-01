import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ImageCTHF } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'

type props = {
    task: string;
    onRemove: () => void;
    doneTask: () => void;
}

export default function TasksChecked({task, onRemove, doneTask}: props){
    return(
        <View style={styles.newTask}>
            
            <TouchableOpacity style={styles.checkedButon} onPress={doneTask}>
                <Image
                    style={styles.Checked}
                    source={ImageCTHF}
                />
            </TouchableOpacity>

            <View style={styles.task}>
                <Text style={styles.addText}> 
                    {task} 
                </Text>
            </View>

            <TouchableOpacity style={styles.trashButon} onPress={onRemove}>
                <Ionicons name="trash-outline" size={22} color="#3d3d3d" />
            </TouchableOpacity>

        </View>
    )
}
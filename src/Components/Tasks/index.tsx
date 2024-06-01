import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ImageCFHF, ImageCTHF } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'

type props = {
    text: string;
    done: boolean;
    onRemove: () => void;
    onDone: () => void;
    onChange: () => void;
}

export default function Tasks({text, done, onRemove, onDone, onChange}: props){

    return(
        <View style={styles.newTask}>
            
            <TouchableOpacity style={styles.checkedButon} onPress={onDone}>
                { done === false ? <Image 
                    style={styles.Unchecked}
                    source={ImageCFHF}
                /> : 
                <Image
                    style={styles.Unchecked}
                    source={ImageCTHF}
                />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.task} onPress={onChange}>
                { done === false ? <Text style={styles.addText}> 
                    {text} 
                </Text> : 
                <Text style={styles.addTextChecked}> 
                    {text} 
                </Text>}
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.trashButon} onPress={onRemove}>
                <Ionicons name="trash-outline" size={22} color="#3d3d3d" />
            </TouchableOpacity>

        </View>
    )
}
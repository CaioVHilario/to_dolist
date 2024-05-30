import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ImageCFHF } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Tasks(){
    return(
        <View style={styles.newTask}>
            
            <TouchableOpacity style={styles.checkedButon}>
                <Image 
                    style={styles.Unchecked}
                    source={ImageCFHF}
                />
            </TouchableOpacity>

            <View style={styles.task}>
                <Text style={styles.addText}> 
                    Integer urna interdum massa libero auctor neque turpis turpis semper. 
                </Text>
            </View>
            
            <TouchableOpacity style={styles.trashButon}>
                <Ionicons name="trash-outline" size={22} color="#3d3d3d" />
            </TouchableOpacity>

        </View>
    )
}
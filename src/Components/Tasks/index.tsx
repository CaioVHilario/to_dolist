import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, Modal } from "react-native";
import { styles } from "./styles";
import { ImageCFHF, ImageCTHF } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'
import Slider from "@react-native-community/slider";

type props = {
    text: string;
    done: boolean;
    onRemove: () => void;
    onDone: () => void;
    onChange: () => void;
}

export default function Tasks({text, done, onRemove, onDone, onChange}: props){
    const [modalVisible, setModalVisible] = useState(false);
    const [range, setRange] = useState(0);
    const [isFocused, setFocused] = useState(false);


    function handleModal(){
        setModalVisible(true)
    };

    function handleFocus(){
        setFocused(!isFocused)
     };

     function handleRangeDone(){
        setRange(100)
     };

    return(
        <View style={[styles.newTask, {
            borderColor: isFocused === true
             ? '#5E60CE'
             : '#292929'
        }]} >

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Como está o andamento da sua tarefa?</Text>
                        {/* <View style={styles.slider}>
                            <Text style={styles.textSlider}> 100% </Text>
                        </View> */}
                        <Text style={styles.modalText}>{range}%</Text>
                        <Slider 
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#1e6f9f"
                            maximumTrackTintColor="#808080"
                            thumbTintColor="#1e6f9f"
                            value={range}
                            onValueChange={value => setRange(Math.ceil(value))}
                        />
                        <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {setModalVisible(!modalVisible); handleFocus()}}>
                        <Text style={styles.textStyle}>Atualizar progresso</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
                
            <TouchableOpacity style={styles.checkedButon} onPress={() => {onDone(); handleRangeDone()}}>
                { done === false ? <Image 
                    style={styles.Unchecked}
                    source={ImageCFHF}
                /> : 
                <Image
                    style={styles.Unchecked}
                    source={ImageCTHF}
                />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.task} onPress={() => {handleModal(); handleFocus()}}>
                { done === false ? 
                    <View style={styles.taskRange}>
                        <Text style={styles.addText}> 
                            {text} 
                        </Text>  
                        <Text style={styles.addTextRange}> 
                            {range}%
                        </Text> 
                    </View> : 
                    <View style={styles.taskRange}>
                        <Text style={styles.addTextChecked}> 
                            {text} 
                        </Text>
                        <Text style={styles.addTextRangeChecked}> 
                            {range}% 
                        </Text>
                    </View>
                }
                
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.trashButon} onPress={onRemove}>
                <Ionicons name="trash-outline" size={22} color="#3d3d3d" />
            </TouchableOpacity>

        </View>
    )
}
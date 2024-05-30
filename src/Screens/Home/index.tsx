import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, FlatList } from "react-native";
import { ImageName } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'
import NewTask from "../../Components/NewTask";
import Tasks from "../../Components/Tasks";

export default function Home(){
    const [tasks, setTasks] = useState('')
    const [newTasks, setNewTasks] = useState('')

    return(
        <View style={styles.home}>
            <View style={styles.container}>
                <Image 
                    style={styles.logoTodo}
                    source={ImageName}
                />
            </View>

            <NewTask />

            <View style={styles.infoTasks}>

                <View style={styles.tasksAlignCreated}>
                    <Text style={styles.textCreated}>
                        Criadas
                    </Text>

                    <View style={styles.numberView}>
                        <Text style={styles.textNumber}> 0 </Text>
                    </View>
                </View>

                <View style={styles.tasksAlignFineshed}>
                    <Text style={styles.textFineshed}>
                    Concluídas
                    </Text>

                    <View style={styles.numberView}>
                        <Text style={styles.textNumber}> 0 </Text>
                    </View>
                </View>

            </View>

            <View style={styles.tasks}>
                <Ionicons name="clipboard-outline" size={90} color="#3d3d3d" marginTop={20}/>
                <Text style={styles.textNotTask}> Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textNotTask2}> Crie novas tarefas e organize seus itens </Text>
            </View>

            <Tasks />

        </View>
    )
}
import React, { useReducer, useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, Alert } from "react-native";
import { ImageName } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'
import Tasks from "../../Components/Tasks";

interface Dates {
  id: string;
  text: string;
  done: boolean;
}

export default function Home(){
    const [tasks, setTasks] = useState<Dates[]>([]);
    const [newTasks, setNewTasks] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [checked, setChecked] = useState<boolean[]>([]);
    const [created, setCreated] = useState(0);
    const [done, setDone] = useState(0);
    const [nextID, setNextID] = useState(0);


    function handleAddNewTask(){

        setNextID(nextID + 1);
        setTasks(prevState => ([...prevState,
            {
                id: nextID.toString(),
                text: newTasks,
                done: false,
            }
        ]));
        setNewTasks('')

    }

    function handleRemoveTask(textID: string, text: string){
        Alert.alert('Remover', `Remover a tarefa ${text}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => 
                    prevState.filter(tasks => tasks.id !== textID)
                )
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleDoneTask(textID: string){
        setTasks(prevState => prevState.map(tasks => 
            tasks.id === textID ? {...tasks, done: !tasks.done} : tasks
        ));
    };

    function handleChangeTask(textID: string){
        setTasks(prevState => prevState.map(tasks => 
            tasks.id === textID ? {...tasks, done: !tasks.done} : tasks
        ));
    };

    return(
        <View style={styles.home}>
            <View style={styles.container}>
                <Image 
                    style={styles.logoTodo}
                    source={ImageName}
                />
            </View>

            <View style={styles.newTask}>

                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6B6B6B"
                        onChangeText={setNewTasks}
                        value={newTasks}
                    />

                <View style={styles.addTask}>
                    <TouchableOpacity onPress={handleAddNewTask}>
                        <Text style={styles.addText}> + </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.infoTasks}>

                <View style={styles.tasksAlignCreated}>
                    <Text style={styles.textCreated}>
                        Criadas
                    </Text>

                    <View style={styles.numberView}>
                        <Text style={styles.textNumber}> {created} </Text>
                    </View>
                </View>

                <View style={styles.tasksAlignFineshed}>
                    <Text style={styles.textFineshed}>
                    Concluídas
                    </Text>

                    <View style={styles.numberView}>
                        <Text style={styles.textNumber}> {done} </Text>
                    </View>
                </View>

            </View>

            <FlatList 
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Tasks
                        key={item.id}
                        text={item.text}
                        done={item.done}
                        onRemove={() => handleRemoveTask(item.id, item.text)}
                        onDone={() => handleDoneTask(item.id)}
                        onChange={() => handleChangeTask}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.tasks}>
                        <Ionicons name="clipboard-outline" size={90} color="#3d3d3d" marginTop={20}/>
                        <Text style={styles.textNotTask}> Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.textNotTask2}> Crie novas tarefas e organize seus itens </Text>
                    </View>
                )}
            />

        </View>
    )
}
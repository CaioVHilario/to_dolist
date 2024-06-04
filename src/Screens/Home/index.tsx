import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, FlatList, TextInput, Alert, Pressable } from "react-native";
import { ImageName } from "../../../assets";
import Ionicons from '@expo/vector-icons/Ionicons'
import Tasks from "../../Components/Tasks";

interface Dates {
    id: string;
    text: string;
    done: boolean;
    feats: number;
    totalDone: number;
}

export default function Home(){
    const [tasks, setTasks] = useState<Dates[]>([]);
    const [newTasks, setNewTasks] = useState('');
    const [created, setCreated] = useState(0);
    const [done, setDone] = useState(0);
    const [nextID, setNextID] = useState(0);
    const [isFocused, setFocused] = useState(false);

    function handleAddNewTask(){
        if(newTasks === '') {
            return Alert.alert('Insira uma taréfa antes de adicionar-la a sua lista.')
        }

        setNextID(nextID + 1);
        setTasks(prevState => ([...prevState,
            {
                id: nextID.toString(),
                text: newTasks,
                done: false,
                feats: 0, // 0 se ainda não foi feito e 1 se já foi feito.
                totalDone: 0,
            }
        ]));
        setNewTasks('');

        setCreated(created + 1);

    }

    function handleRemoveTask(textID: string, text: string){
        Alert.alert('Remover', `Remover a tarefa ${text}?`, [
            {
                text: 'Sim',
                onPress: () => {setTasks(prevState =>
                    prevState.filter(tasks => tasks.id !== textID)
                ),
                setCreated(created - 1)}
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ]);
    }

    function handleDoneTask(textID: string, total: number){
        setTasks(prevState => prevState.map(tasks => 
            tasks.id === textID ? {...tasks, done: !tasks.done, feats: !tasks.done ? 1 : 0}  : tasks
        ));
    };

    useEffect(() => {
        setDone(tasks.map(tasks => ({...tasks})).reduce((total, tasks) => total + tasks.feats, 0));
    }, [tasks])
    
     function handleFocus(){
        setFocused(true)
     }

     function handleBlur(){
        setFocused(false)
     }

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
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[styles.input, {
                        borderColor: isFocused
                         ? '#5E60CE'
                         : '#292929'
                    }]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setNewTasks}
                    value={newTasks}
                />

                <Pressable 
                    onPress={handleAddNewTask}
                
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#4EA8DE' : '#1e6f9f',
                    },
                    styles.addTask,
                    ]}>
                    <View >
                        <Text style={styles.addText}> + </Text>
                    </View>
                </Pressable>

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
                        onDone={() => handleDoneTask(item.id, 0)}
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
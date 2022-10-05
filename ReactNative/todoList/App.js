import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Tasks from './components/Tasks';

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.tasksWrapper}>
          <Text styles={styles.sectionTitle}>Today's Task</Text>
          <View style={styles.items}>
            {taskItem?.map((item, index) => {
              return (
                // <Tasks key={index} text={item} />
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Tasks key={index} text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTextWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'write a task'}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  scrollView: {
    maxHeight: '83%',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 25,
  },
  writeTextWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 48,
    height: 48,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
  },
});

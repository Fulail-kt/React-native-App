import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const onChangeText = (text) => {
    setText(text);
  };

  const handlePress = () => {
    setTodo(prev => [...prev, { text: text, completed: false }]);
    setText('');
  };

  const todoCompleted = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = true;
    setTodo(newTodo);
  }

  const todoDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TextInput onChangeText={onChangeText} style={[styles.text, { width: 200 }]} placeholder='Type here!' value={text} />
        <Button onPress={handlePress} title='Tap me!' />
      </View>
      <View>
        {todo.map((item, index) => (
          <View key={index} style={styles.goal}>
            <Text style={{ width: '80%', overflow: 'scroll', padding: 4, textDecorationLine: item.completed ? 'line-through' : 'none' }} >{item?.text}</Text>
            <View style={{ flexDirection: 'row', backgroundColor: 'green', height: '100%', borderRadius: 2, padding: 3, width: "20%", justifyContent: 'space-around', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => todoCompleted(index)} style={styles.button}>
                <Text style={styles.buttonText}>O</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => todoDelete(index)} style={styles.button}>
                <Text style={styles.buttonText} >X</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,

  },
  text: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    margin: 3,
    padding: 3
  },
  goal: {
    color: 'rff',
    borderRadius: 3,
    backgroundColor: 'purple',
    margin: 2,
    width: "75%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'visible'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

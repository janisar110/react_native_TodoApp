import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if(todoInput==""){
      return Alert.alert("Todo input is required")
    }
    const Todo = {
      id: Math.random(),
      todoTask: todoInput,
    };
    setTodos([...todos, Todo]);
    setTodoInput('');
  };

  const handleDeleteTodo = id => {
    const filteredTodos = todos.filter(values => values.id != id);
    setTodos(filteredTodos);
  };

  const ItemList = ({todo}) => (
    <View style={styles.listContainer}>
      <Text>{todo.todoTask}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleDeleteTodo(todo.id)}>
        <Text style={{color: 'white'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.handings}>JM Todo</Text>
      </View>
      <ScrollView vertical={true}>
        <View style={styles.body}>
          <FlatList
            data={todos}
            renderItem={({item}) => <ItemList todo={item} />}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{padding: 20}}
            onChangeText={setTodoInput}
            value={todoInput}
            placeholder="Add todo here"
          />
        </View>

        <TouchableOpacity style={styles.iconContainer} onPress={handleAddTodo}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 50,
    elevation: 40,
  },
  handings: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#43A5EC',
  },
  body: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  listContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    elevation: 40,
    flex: 1,
    width: '100%',
    marginLeft: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#43A5EC',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

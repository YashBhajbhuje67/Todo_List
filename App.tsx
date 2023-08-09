import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import Display from './components/Display';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [data, setData] = useState({ title: '', description: '' });

  const validate = () => {
    if (!data.title.length || !data.description.length) {
      return false;
    }
    return true;
  };

  const onDelete = (todo) => {
    setTodoData(todoData.filter((e) => e !== todo));
  };

  const handleSubmit = () => {
    if (validate()) {
      setTodoData([...todoData, data]);
      setData({ title: '', description: '' });
    }
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
        <Text style={styles.header}>Todo List App</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Title:</Text>
          <TextInput
            style={styles.input}
            value={data.title}
            onChangeText={(titleText) => {
              setData({ ...data, title: titleText });
            }}
          />
          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            value={data.description}
            onChangeText={(descriptionText) => {
              setData({ ...data, description: descriptionText });
            }}
          />
          <View style={styles.button}>
            <Button title="Add" onPress={handleSubmit} color='white' />
          </View>
        </View>
        <View>
          {todoData.length !== 0
            ? todoData.map((todo, index) => {
                return <Display key={index} todo={todo} onDelete={onDelete} />;
              })
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerView:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
    borderBottomColor: 'black',
    borderRadius: 4,
    borderBottomWidth: 1,
    paddingBottom: 6
  },
  header:{
    fontSize: 20,
  },
  inputContainer: {
    gap: 4,
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 8,
  },
  button:{
    backgroundColor: '#34d399',
    
  }
});

export default App;

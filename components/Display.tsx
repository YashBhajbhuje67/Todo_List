import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const Display = ({ todo, onDelete }) => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.title}>{ todo.title }</Text>
      <Text>{ todo.description }</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Delete" onPress={()=> onDelete(todo) } color='white'/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 4,
  },
  textContainer: {
    alignSelf: 'center',
  },
  title:{
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 4,
  },
  buttonContainer:{
    backgroundColor: '#f43f5e',
    alignSelf: 'center',
    borderRadius: 4
  }
});

export default Display
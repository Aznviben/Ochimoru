import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View 
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}
      >
        <View>
          <Text>
            Ochimoru; the start of something beautiful
          </Text>
        </View>
      </View>
      <View
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}
      >
        <TextInput
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{textAlign:'center',fontSize:50}}
        placeholder={"Please enter \nyour \nOchimoru's \nName"}
        onChangeText={newName => setName(newName)}
        defaultValue={name}
        autoFocus={true}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

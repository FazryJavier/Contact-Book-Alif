import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function InputContact() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
        setImage(result.uri);
    }
};

  return (
    <ScrollView style={{ backgroundColor: "#bcbdf1" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={num}
            onChangeText={(text) => setNum(text)}
            style={styles.input}
          />
          {image != null ? (
            <></>
          ) : (
            <>
              <StatusBar hidden={true} />
              <TouchableOpacity onPress={pickImage} style={styles.buttonimage}>
                <Text style={styles.buttonText}>Pick Image</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
            </>
          )}
        </View>
        {image && (
          <View>
            <Card.Cover
              source={{ uri: image }}
              style={{ margin: 20, width: 200, height: 200 }}
            />
            <TouchableOpacity
              onPress={pickImage}
              style={[
                styles.buttonimage,
                { justifyContent: "center", alignSelf: "center" },
              ]}
            >
              <Text style={styles.buttonText}>Change Image</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bcbdf1',
        marginTop: '20',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonimage: {
        backgroundColor: '#0782F9',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        // marginBottom: 20,
        textAlign: 'center',
        // fontFamily: 'sans-serif-bold',
    },
})

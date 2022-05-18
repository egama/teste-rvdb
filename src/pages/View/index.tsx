import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useNotepad } from '../../contexts/notepad';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

const ViewScreen: React.FC = (props) => {
    const { item } = props.route.params;

    const { list, newAnotation, editAnotation } = useNotepad();
    const [name, setName] = useState(item?.name);
    const [anotation, setAnotation] = useState(item?.description);

    function handleNew() {
        if(item && item.index >= 0){
            editAnotation(name, anotation, item.index);
        }else {
            newAnotation(name, anotation);

        }
        props.navigation.navigate("List")
    }
    function handleName(value) {
        setName(value);
    }
    function handleAnotation(value) {
        setAnotation(value);
    }

    return (
        <View style={styles.container}>
            <TextInput style={[styles.input]}
                placeholder={"Nome"}
                autoCapitalize="none"
                onChangeText={handleName}
                value={name}
            />

            <TextInput style={[styles.input]}
                placeholder={"Anotação"}
                autoCapitalize="none"
                onChangeText={handleAnotation}
                value={anotation}
            />

            <Button title="Salvar" onPress={handleNew} />
        </View>
    );
};

export default ViewScreen;


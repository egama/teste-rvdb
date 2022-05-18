import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNotepad } from '../../contexts/notepad';
import styled from 'styled-components/native';

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

export const Label = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: red;
`;

export const Novo = styled.TouchableOpacity`
margin-bottom: 60px;
`;

const Dashboard: React.FC = (props) => {
    const { list, newAnotation } = useNotepad();

    function handleNew() {
        props.navigation.navigate("View", { item: null })
    }

    function handleOpen(item, index) {
        props.navigation.navigate("View", { item: { ...item, index } })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={({ item, index }) => <TouchableOpacity onPress={() => handleOpen(item, index)}><Label style={styles.itemList}>{item.name}</Label></TouchableOpacity>}
            />

            <Novo onPress={handleNew}><Text>Novo</Text></Novo>
        </View>
    );
};

export default Dashboard;


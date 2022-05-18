import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Anotation {
    name: string;
    description: string;
}

interface NotepadContextData {
    note: Anotation;
    list: Anotation[];
    loading: boolean;
    newAnotation(name, description): Promise<void>;
    editAnotation(name, description, index): Promise<void>;
}

const NotepadContext = createContext<NotepadContextData>({} as NotepadContextData);

const NotepadProvider: React.FC = ({ children }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    });

    async function newAnotation(name, description) {
        const response: Anotation = { name, description };
        setList(result => [...result, response]);
    }

    async function editAnotation(name, description, index) {
        let newArr = [...list];
        newArr[index] = { name, description };

        setList(newArr);
    }

    return (
        <NotepadContext.Provider
            value={{ list, loading, newAnotation, editAnotation }}>
            {children}
        </NotepadContext.Provider>
    );
};

function useNotepad() {
    const context = useContext(NotepadContext);

    if (!context) {
        throw new Error('Erro');
    }

    return context;
}

export { NotepadProvider, useNotepad };
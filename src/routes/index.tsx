import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useNotepad } from '../contexts/notepad';

import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useNotepad();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return <AppRoutes />;
};

export default Routes;
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="orange" />
    </View>
);

export default Loading;

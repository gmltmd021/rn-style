import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

const Shadow = () => {
    return <View style={style.shadow}>
        <Text>{Platform.OS === 'ios' ? 'ios' : 'android'}</Text>
    </View>;
};

const style = StyleSheet.create({
    shadow: {
        width: 200,
        height: 200,
        ...Platform.select(
            {
                ios: {
                    backgroundColor: 'blue',
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                },
                android: {
                    backgroundColor: 'green',
                    elevation: 20,
                },
            },
        ),
    },
});

export default Shadow; 
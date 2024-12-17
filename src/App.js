import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { styles, orangeText } from './style';
//import Box from './Box';
//import Shadow from './Shadow';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    backgroundColor: gray;
    align-items: center;
    justify-content: center;
`;

const cssText = css`
    font-size: 20px;
    font-weight: 600;
`;

const StyledText = styled.Text`
    ${cssText}
    color: blue;
`;

const StyledButton = styled.Button``;

const ErrorText = styled(StyledText)`
    ${cssText}
    color: red;
`;

export default function App() {

    return (
        // <View style={styles.container}>
        //     {/* <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>Style color</Text> */}
        //     {/* <Text style={[styles.text, orangeText]}>Errorcolor</Text>
        //     <Text style={[styles.text, styles.errorText]}>Stylecolor</Text> */}

        //     {/* <Box style={{ backgroundColor: 'red', flex: 1 }} />
        //     <Box style={{ backgroundColor: 'green', flex: 1 }} />
        //     <Box style={{ backgroundColor: 'blue', flex: 1 }} /> */}

        //     {/* <Shadow /> */}
        // </View>
        <Container>
            <StyledText>Styled Components</StyledText>
            <ErrorText>Error !!</ErrorText>
            <StyledButton title="Styled" onPress={() => alert('click')}/>
        </Container>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         backgroundColor: 'black',
//         color: 'white',
//         fontSize: 20
//     },
//     errorText: {
//         backgroundColor: 'black',
//         color: 'red',
//         fontSize: 20
//     }
// });

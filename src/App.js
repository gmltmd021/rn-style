import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Switch } from 'react-native';
//import { styles, orangeText } from './style';
//import Box from './Box';
//import Shadow from './Shadow';
//import styled, { css } from 'styled-components/native';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './Input';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.bgColor};
    align-items: center;
    justify-content: center;
`;

// const cssText = css`
//     font-size: 20px;
//     font-weight: 600;
// `;

// const StyledText = styled.Text`
//     ${cssText}s
//     color: blue;
// `;

// const StyledButton = styled.Button``;

// const ErrorText = styled(StyledText)`
//     ${cssText}
//     color: red;
// `;

const lightThema = {
    inputColor: '#111111',
    inputBoder: '#111111',
    bgColor: 'gray',
};

const darkThema = {
    inputColor: 'gray',
    inputBoder: 'gray',
    bgColor: '#111111',
};

export default function App() {
    const [isLight, toggleTheme] = useState(true);

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
        <ThemeProvider theme={isLight ? lightThema: darkThema}>
            <Container>
                {/* <StyledText>Styled Components</StyledText>p
            <ErrorText>Error !!</ErrorText>
            <StyledButton title="Styled" onPress={() => alert('click')}/> */}
                <Switch value={isLight} onValueChange={isLight => toggleTheme(isLight)} />
                <Input placeholder="Type a message" />
                <Input />
            </Container>
        </ThemeProvider>
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

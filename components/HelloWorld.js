import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const HelloWorld = () => {
    const [textInput, setTextInput] = useState('');
    const [currentBalance, setCurrentBalance] = useState(0.00);

    
    
    
    function submitNumber() {

       setCurrentBalance(
            parseFloat(textInput) + currentBalance
        );

        setTextInput('');
    }


    return (
    


    
    <View style={styles.container}>
            <Text>Keep Track of Credit Card Spending</Text>
            <Text>Credit Card Balance: {currentBalance}</Text>
            <TextInput style={styles.input}
                placeholder='$0.00'
                keyboardType="numeric"

                value={textInput}

                onChangeText={text => 
                    // allow only input in 0-9, one decimal point, and a maximum of two decimal places
                 {if (text.match(/^\$\d*\.?\d{0,2}$/)) {
                    setTextInput(text);
                } else if 
                // if matches, but doesn't have dollar sign, add dollar sign
                (text.match(/^\d*\.?\d{0,2}$/)) {
                    setTextInput('$' + text);
                } else {
                    setTextInput(text.slice(0, -1));
                }
                 }   
                    
                }

                onSubmitEditing={() => {
                    submitNumber()
                }
                }
                

            />
            <Text>{textInput}</Text>
        </View>
    );
}


    let value = 0;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F8F8FF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            width: 200,
            height: 50,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey',    
            margin: 10,
            padding: 15,
            fontSize: 20,
            fontWeight: 'bold',
        }
    });

export { HelloWorld as HelloThere};


import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import {PRIMARY_COLOR, BLACK, LIGHT_GREEN } from "../assets/styles";
import React, { useState } from 'react';


const Home = () => {
    
    
    const [textInput, setTextInput] = useState('');
    const [currentBalance, setCurrentBalance] = useState(0.00);
    const [creditCardBalance, setCreditCardBalance] = useState(1000.00);
    const [remainingGoalBalance, setRemainingGOalBalance] = useState(0.00);

    function submitNumber() {
        // check if textInput is empty or === $
        if (textInput === '' || textInput === '$' || textInput === '$.')  {
            setTextInput('');
            return;
        }
        setCurrentBalance(
            
            parseFloat(textInput.substring(1)) + currentBalance
            
        );
        setTextInput('');
    }

    return (
        <View style={styles.container}>

            <View style={styles.balanceSection}>
                <Text style={styles.remainingGoalBalance}>${remainingGoalBalance}</Text>
                <Text style={styles.balance}>${currentBalance}</Text>
                <Text style={styles.creditLimit}>/ ${creditCardBalance} limit</Text>
            </View>

            <View style={styles.spendingSection}>
                <TextInput style={styles.spendingAmountInput}
                    placeholder='$0.00'
                    // keyboardType="numeric"

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
                    }}
                />
                    
                {/* multi-line text input */}
                <TextInput style={styles.spendingDescriptionInput}
                    placeholder='Enter a description'
                    multiline={true}
                    numberOfLines={3}
                    >
                </TextInput>

                <Pressable style={styles.spendingButton}
                    onPress={() => {
                        submitNumber()
                    }}
                    >
                        <Text style={styles.spendingButtonText}>$</Text>
                </Pressable>
            </View>
            

            <View style={styles.resetSection}>
                <Pressable style={styles.resetButton}
                    onPress={() => {
                        console.log('pressed');
                    }
                    }
                    >
                    <Text style={styles.resetButtonText}>RESET BALANCE</Text>
                </Pressable>
            </View>
        </View>
    );
    }

    const styles = StyleSheet.create({

        resetSection: {
            marginTop: 125,
            marginBottom: 300,
        },
        resetButtonText: {
            fontFamily: 'Acumin Pro Italic',
            fontSize: 15,
            color: BLACK,
            textAlign: 'center',
        },

        spendingButton: {
            marginTop: 10,
            width: 270,
            // height: 50,
            backgroundColor: PRIMARY_COLOR,
            padding: 8,
            borderRadius: 15,
            alignItems: 'center',
        },

        spendingButtonText: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'BAHNSCHRIFT',
        },

        spendingSection: {
            flex: 1,
            alignItems: 'center',
            marginTop: 80
        },

        spendingAmountInput: {
            height: 55,
            width: 270,
            borderColor: BLACK,
            borderWidth: 2,
            borderRadius: 28,
            textAlign: 'center',
            padding: 7,
            paddingTop: 10,
            fontFamily: 'BAHNSCHRIFT',
            fontSize: 30,
            fontWeight: 'bold',
        },

        spendingDescriptionInput: {
            width: 270,
            height: 150,
            borderColor: BLACK,
            borderWidth: 2,
            borderRadius: 10,
            padding: 12,
            marginTop: 10,
            // italic: true,
            fontFamily: 'Acumin Pro Italic',
            fontSize: 16,


        },


        container: {
            // flex: 1,
            backgroundColor: '#f6f8ff',
            alignItems: 'center',
        },

        balanceSection: {
            // 20 from the top
            marginTop: 100,
            paddingBottom: 0,
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center'
        },

        remainingGoalBalance: {
            fontFamily: 'BAHNSCHRIFT',
            fontSize: 22,
            color: 'green',
            marginBottom: 6,
        },

        balance: {
            fontFamily: 'BAHNSCHRIFT',
            fontSize: 70,
            fontWeight: 'bolder',
        },

        creditLimit: {
            fontFamily: 'BAHNSCHRIFT',
            fontSize: 22,
            fontWeight: 'bolder',
            // padding left
            paddingLeft: 120,
        },

    });


    export { Home as HomeScreen };
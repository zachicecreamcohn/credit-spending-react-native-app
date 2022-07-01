import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Counter = () => {
    // let currentBalance = 0;
    


    return (



        

        <View style={styles.container}>
        <Text>Keep Track of Credit Card Spending</Text>
        {/* <Text>Credit Card Balance: {currentBalance}</Text> */}

        {/* a number input to input money spent */}
        {/* <textInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="$0.00"
            keyboardType="numeric"
            onSubmitEditing={() => {
                // check if there exist an item in AsyncStorage with the key 'moneySpent'
                AsyncStorage.getItem('moneySpent', (err, result) => {
                    // if there is no item in AsyncStorage with the key 'moneySpent'
                    if (result == null) {
                        // set the value of the key 'moneySpent' to 0
                        AsyncStorage.setItem('moneySpent', '0');
                    }
                    // if there is an item in AsyncStorage with the key 'moneySpent'
                    else {
                        // add the value of the key 'moneySpent' to the value of the text input
                        AsyncStorage.setItem('moneySpent', (parseFloat(result) + parseFloat(textInput.value)).toString());
                    }

                    // update the credit card balance text
                    AsyncStorage.getItem('moneySpent', (err, result) => {
                        currentBalance = parseFloat(result).toString();
                    });

                });
            }
            
        
        }
        /> */}

             
        </View>
    );
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F8F8FF',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

}

export { Counter as Counter };


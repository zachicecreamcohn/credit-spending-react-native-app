import { StyleSheet, View, Text } from 'react-native';



const Details = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.BAHNSCHRIFT}>Details Screen</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f6f8ff',
            alignItems: 'center',
            justifyContent: 'center',
        },

        BAHNSCHRIFT: {
            fontFamily: 'BAHNSCHRIFT',
            fontSize: 50,
            fontWeight: 'bolder',
        }
    });


    export { Details as DetailsScreen };
import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { useCounterPlusOne, useCounterMinusOne, useCounterReset } from './redux/hooks';

export default function CounterPage({ navigation }) {
    const { count, counterPlusOne } = useCounterPlusOne();
    const { counterMinusOne } = useCounterMinusOne();
    const { counterReset } = useCounterReset();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            <Text style={styles.discribe}>This is simple counter demo to show how Redux sync actions work.</Text>
            <View style={styles.row}>
                <Button
                    onPress={counterMinusOne}
                    title="-"
                    disabled={count === 0}
                />
                <Text style={styles.discribe}>{count}</Text>
                <Button
                    onPress={counterPlusOne}
                    title="+"
                />
            </View>
            <Button
                onPress={counterReset}
                title="Reset"
            />
            <Button
                title="Go to List"
                onPress={() =>
                    navigation.navigate('List')
                }
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
    },
    discribe: {
        fontSize: 16,
        marginVertical: 15,
        marginHorizontal: 10
    },
    row: {
        flexDirection: "row",
        alignItems: 'baseline',
    }

});

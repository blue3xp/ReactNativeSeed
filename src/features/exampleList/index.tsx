import React from 'react';
import { Text, Button, View, StyleSheet,ScrollView } from 'react-native';
import { useFetchRedditList } from './redux/hooks';

export default function ListPage() {

    const {
        redditList,
        fetchRedditList,
        fetchRedditListPending,
        fetchRedditListError,
    } = useFetchRedditList();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List Page</Text>
            <Text style={styles.discribe}>This demo shows how to use Redux async actions to fetch data from REST API.</Text>
            <Button
                disabled={fetchRedditListPending}
                onPress={fetchRedditList}
                title={fetchRedditListPending ? 'Fetching...' : 'Fetch reactjs topics'}
            >
            </Button>
            {fetchRedditListError && (
                <View >Failed to load: {fetchRedditListError.toString()}</View>
            )}
            {redditList!=null && redditList.length > 0 ? (
                <ScrollView>
                    {redditList.map(item => (
                        <Text key={item.data.id}>
                            {item.data.title}
                        </Text>

                    ))}
                </ScrollView>
            ) : (
                    <Text>No items yet.</Text>
                )}

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

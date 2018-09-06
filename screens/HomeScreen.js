import React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import ListCard from '../components/ListCard';

const data = [
    {
        id: '1',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator Gjennomgang av nye funksjoner i Predator Gjennomgang av nye funksjoner i Predator',
        isAttending: false
    },
    {
        id: '2',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator',
        isAttending: false
    },
    {
        id: '3',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator',
        isAttending: true
    },
    {
        id: '4',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator',
        isAttending: false
    },
    {
        id: '5',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator',
        isAttending: false
    },
    {
        id: '6',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Gjennomgang av nye funksjoner i Predator',
        isAttending: true
    },
    {
        id: '7',
        name: 'Nyheter i Predator',
        time: '11:00 – 11:45',
        prelegent: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        shortDescription: 'Random stuff',
        isAttending: false
    }
];

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <ListCard {...item} />} />
            </View>
        );
    }

    _keyExtractor = (item) => item.id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

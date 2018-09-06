import React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import ListCard from '../components/ListCard';

const data = [
    {
        id: '1',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator Gjennomgang av nye funksjoner i Predator Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '2',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '3',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '4',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '5',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '6',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Gjennomgang av nye funksjoner i Predator',
        isMyEvent: false
    },
    {
        id: '7',
        name: 'Nyheter i Predator',
        timeFromTo: '11:00 – 11:45',
        speaker: 'Anette Trevland og Knut Skofteland',
        location: 'OSEBERGSALEN',
        description: 'Random stuff',
        isMyEvent: false
    }
];

export default class EventsListScreen extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({ data });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <ListCard {...item} startClickHandler={this.onStarClick} navHandler={this.onNavigation} />} />
            </View>
        );
    }

    onStarClick = async (id) => {
        const dataCopy = this.state.data.map(d => {
            return {...d};
        });

        for (let row of dataCopy) {
            if (row.id !== id) {
                continue;
            }

            row.isMyEvent = !row.isMyEvent;

            break;
        }

        this.setState({ data: dataCopy });
    }

    onNavigation = (id) => {
        const { navigate } = this.props.navigation;

        for (let row of this.state.data) {
            if (row.id !== id) {
                continue;
            }

            navigate('Links', row);

            return;
        }
    }

    _keyExtractor = (item) => item.id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

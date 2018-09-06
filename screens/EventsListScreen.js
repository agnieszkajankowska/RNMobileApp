import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import ListCard from '../components/ListCard';
import globalState from '../globalState';

export default class EventsListScreen extends React.Component {
    static navigationOptions = {
        title: 'Events List',
    };

    state = {
        data: [],
        filterForStarred: false,
    }

    componentDidMount() {
        fetch(`https://inkassoforummobileapi.azurewebsites.net/api/Event/${globalState}`)
            .then(response => response.json())
            .then(response => this.setState({ data: response }));
    }

    render() {
        const data = this._getFilteredData();

        return (
            <View style={styles.container}>
                {!!globalState.userCode ? 
                <TouchableWithoutFeedback onPress={this.onFilter}>
                    <View style={styles.filterContainer}>
                        {this.state.filterForStarred ? <Text style={styles.filter}>Show all events</Text> : <Text style={styles.filter}>Show only my events</Text>}
                    </View>
                </TouchableWithoutFeedback> : null}
                {data.length > 0 ?
                <FlatList
                    data={data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <ListCard {...item} startClickHandler={this.onStarClick} navHandler={this.onNavigation} />} /> : 
                <Text style={styles.noResultsText}>{this.state.filterForStarred ? 
                    'You haven\'t chosen any sessions yet. In order to mark that you\'ll be present on a given sessions, click on the star symbol in the bottom right corner of a card' : 
                    'Loading sessions...'}</Text>}
            </View>
        );
    }

    onFilter = () => {
        this.setState((state) => {
            return {...state, filterForStarred: !state.filterForStarred};
        });
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

            fetch(`https://inkassoforummobileapi.azurewebsites.net/api/Event/AddToMyEvents/${globalState.userCode}/${parseInt(id)}`, {
                method: 'POST'
            });
            
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

    _getFilteredData() {
        if (!this.state.filterForStarred) {
            return this.state.data;
        }

        return this.state.data.filter(r => r.isMyEvent);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    filterContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filter: {
        margin: 10,
        padding: 10,
        backgroundColor: '#00816d',
        borderRadius: 10,
        color: '#ffffff'
    },
    noResultsText: {
        fontWeight: 'bold',
        padding: 20
    }
});

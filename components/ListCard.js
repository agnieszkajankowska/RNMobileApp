import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'react-native-elements';

const ListCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.navHandler(props.id)}>
            <View style={styles.listCard}>
                <View style={[styles.twoColumns, styles.spacer]}>
                    <Text style={[styles.textBold, styles.titleContents]}>{props.name}</Text>
                    <Text style={styles.titleContents}>{props.timeFromTo}</Text>
                </View>
                <Text style={styles.spacer}>{props.speaker}</Text>
                <View style={[styles.spacer, styles.location]}>
                    <Text style={styles.textBold}>{props.location}</Text>
                    <Image style={{ marginLeft: 10, height: 15, width: 15 }} source={require('../assets/images/location.png')} />
                </View> 
                <View style={styles.twoColumns}>
                    <Text style={[styles.spacer, styles.shortDescription]}
                        ellipsizeMode='tail' 
                        numberOfLines={2}>{props.description}</Text>
                    <TouchableWithoutFeedback onPress={() => props.startClickHandler(props.id)}>
                        {props.isMyEvent ? <Icon color='#00816d' name='star' /> : <Icon color='#00816d' name='star-border' />}
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ListCard;

const styles = StyleSheet.create({
    listCard: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    textBold: {
        fontWeight: 'bold',
        color: '#00816d'
    },
    twoColumns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleContents: {
        fontSize: 16
    },
    location: {
        flex: 1,
        flexDirection: 'row',
    },
    spacer: {
        marginBottom: 10
    },
    shortDescription: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
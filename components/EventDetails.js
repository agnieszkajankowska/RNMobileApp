import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';

class EventDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {
        const eventDetails = {
            name: "Nyheter i Predator",
            timeFromTo: "10.00 - 11.00",
            speaker: "Andersh",
            location: "Room 12",
            description: "",
            isMyEvent: true,
            isRunning: true
        }

        const submitRating = () => {
            console.log('submit rating');
        }

        const submitQuestion = () => {
            console.log('submit question');
        }

        return (
            <View style={{padding: 10}}>
                <View>
                <Text style={styles.details}>Name: {eventDetails.name}</Text>
                <Text style={styles.details}>Time: {eventDetails.timeFromTo}</Text>
                <Text style={styles.details}>Speaker: {eventDetails.speaker}</Text>
                <Text style={styles.details}>Location: {eventDetails.location}</Text>
                <Text style={styles.details}>Description: {eventDetails.description}</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.header}>Ask a question</Text>
                    <TextInput style={{height: 40}} onChangeText={(text) => this.setState({text})}/>
                    <Button title="Submit" onPress={submitQuestion} color='#00816d'/>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.header}>Rate session</Text>
                    <Rating
                        showRating
                        type="star"
                        fractions={0}
                        startingValue={4}
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />
                    <Button title="Submit" onPress={submitRating} color="#00816d"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#00816d',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        justifyContent: 'center'
    },
    details: {
        color: '#000',
        fontSize: 20
    },
    viewStyle: {
        paddingTop: 20
    }
});


export default EventDetails;

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


class EventDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    render() {
        const eventDetails = {
            name: "Nyheter i Predator",
            time: "10.00 - 11.00",
            speaker: "Andersh",
            location: "Room 12",
            description: "",
            isMyEvent: true
        }
        return (
            <View>
                <Text>Name:{eventDetails.name}</Text>
                <Text>Time:{eventDetails.time}</Text>
                <Text>Speaker: {eventDetails.speaker}</Text>
                <Text>Location: {eventDetails.location}</Text>
                <Text>Description: {eventDetails.description}</Text>
                <Text>Ask a question</Text>
                <TextInput style={{height: 40}} onChangeText={(text) => this.setState({text})}/>
                <Text>Rate session</Text>
                <Button title="Submit"/>
            </View>
        )
    }
}

export default EventDetails;

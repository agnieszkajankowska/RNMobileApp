import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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
            time: "10.00 - 11.00",
            speaker: "Andersh",
            location: "Room 12",
            description: "",
            isMyEvent: true
        }

        const submitRating = () => {
            console.log('submit rating');
        }

        const submitQuestion = () => {
            console.log('submit question');
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
                <Button title="Submit" onPress={submitQuestion}/>
                <Text>Rate session</Text>
                <Rating
                    showRating
                    type="star"
                    fractions={0}
                    startingValue={3.6}
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
                <Button title="Submit" onPress={submitRating}/>
            </View>
        )
    }
}

export default EventDetails;

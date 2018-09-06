import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import globalState from '../globalState';

class EventDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            rating: 0,
            isQuestionSent: false,
            isRatingSent: false
        }
    }

    ratingCompleted(rating) {
        this.setState({...this.state, rating: rating})
        console.log("Rating is: " + rating)
    }

    render() {
        const submitRating = () => {
            fetch('https://inkassoforummobileapi.azurewebsites.net/api/Event/SubmitQuestion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userCode: globalState.userCode,
                    eventId: this.props.details.id,
                    question: this.state.text
                })
            }).then(
                ((response) => response.json().then((data) => {
                        this.setState({...this.state, question: ''})
                    }
                ))
            )
            console.log('submit rating', globalState.userCode);
        }

        const submitQuestion = () => {
            fetch('https://inkassoforummobileapi.azurewebsites.net/api/Event/RateEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userCode: globalState.userCode,
                    eventId: this.props.details.id,
                    rating: this.state.rating,
                    comment: ""
                })
            }).then(
                ((response) => response.json().then((data) => {
                    console.log('data', data);
                    }
                ))
            )
            console.log('submit question');
        }
        console.log('globalState.isAuthorized', globalState.isAuthorized, 'this.props.details.isMyEvent', this.props.details.isMyEvent, 'this.props.details.isRunning', this.props.details.isRunning )
        return (
            <View style={{padding: 10}}>
                <View>
                <Text style={styles.details}>Name: {this.props.details.name}</Text>
                <Text style={styles.details}>Time: {this.props.details.timeFromTo}</Text>
                <Text style={styles.details}>Speaker: {this.props.details.speaker}</Text>
                <Text style={styles.details}>Location: {this.props.details.location}</Text>
                <Text style={styles.details}>Description: {this.props.details.description}</Text>
                </View>
                {
                    (globalState.isAuthorized && this.props.details.isMyEvent && this.props.details.isRunning) ?
                        <View style={styles.viewStyle}>
                            <Text style={styles.header}>Ask a question</Text>
                            <TextInput style={{height: 40}} onChangeText={(text) => this.setState({text})}/>
                            <Button title="Submit" onPress={submitQuestion} color='#00816d'/>
                            {this.state.isQuestionSent ? <Text>Your question has been sent.</Text> : null}
                        </View> : null
                }
                {
                    (globalState.isAuthorized && this.props.details.isMyEvent && this.props.details.isRunning) ?
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
                            {this.state.isRatingSent ? <Text>Your rating has been sent</Text> : null}
                        </View> : null
                }

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

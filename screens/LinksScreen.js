import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EventDetails from "../components/EventDetails";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Details',
  };

  render() {
      console.log('links props', this.props)
    return (
      <ScrollView style={styles.container}>
          <EventDetails details={this.props.navigation.state.params}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EventDetails from "../components/EventDetails";


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Details',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <EventDetails/>
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

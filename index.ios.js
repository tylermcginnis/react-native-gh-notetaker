var React = require('react-native');
var Main = require('./App/Main');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var NoteTaker = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Note Taker',
          component: Main,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('notetaker', () => NoteTaker);

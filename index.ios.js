var React = require('react-native');
var Main = require('./App/Components/Main');

window.React = React;

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
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('notetaker', () => NoteTaker);

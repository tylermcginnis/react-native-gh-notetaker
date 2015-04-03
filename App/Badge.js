var React = require('react-native');

var {
  Text,
  View,
  Image,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

class Badge extends React.Component{
  render(){
    return (
      <View>
        <Image style={styles.image} source={{uri: this.props.userInfo.avatar_url}}/>
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
};

module.exports = Badge;
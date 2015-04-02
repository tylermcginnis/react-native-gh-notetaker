var React = require('react-native');
var Profile = require('./Profile');

var {
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight
} = React;

var styles = {
  container: {
    marginTop: 65,
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
}

class Dashboard extends React.Component{
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile(){
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="black">
              <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="black">
              <Text style={styles.buttonText}>View Repositories</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToProfile.bind(this)}
            underlayColor="black">
              <Text style={styles.buttonText}>Take Notes</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;
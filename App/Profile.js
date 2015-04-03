var React = require('react-native');
var Badge = require('./Badge');

var {
  Text,
  View,
  Image,
  ScrollView
} = React;

var styles = {
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
}

class Profile extends React.Component{
  getRowTitle(user, item){
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render(){
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return <View/>
      } else {
        return (
          <View>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.getRowTitle(userInfo, item)}</Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
            <View style={styles.separator} />
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
};

module.exports = Profile;
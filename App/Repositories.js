var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./Separator');

var {
  ScrollView,
  Text,
  View,
  ListView
} = React;

var styles = {
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
}

class Repositories extends React.Component{
  render(){
    var repos = this.props.repos;
    var list = repos.map((item, index) => {
      var desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.name}> {repos[index].name} </Text>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
            <Text style={styles.url}> {repos[index].html_url} </Text>
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

module.exports = Repositories;
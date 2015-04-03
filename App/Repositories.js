var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./Separator');

var {
  View,
  Text,
  ListView
} = React;

var styles = {
  container: {
    flex: 1,
    marginTop: 65
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
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.repos)
    }
  }
  renderRow(rowData){
    var desc = rowData.description ? <Text style={styles.description}> {rowData.description} </Text> : <View />;
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.name}> {rowData.name} </Text>
          <Text style={styles.stars}> Stars: {rowData.stargazers_count} </Text>
          {desc}
          <Text style={styles.url}> {rowData.html_url} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
      </View>
    )
  }
};

module.exports = Repositories;
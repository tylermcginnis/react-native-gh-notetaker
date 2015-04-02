var React = require('react-native');

var {
  View,
  Text,
  ListView
} = React;

var styles = {
  container: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  separator: {
    height: 2,
    backgroundColor: '#666',
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    padding: 10
  }
}

class Repositories extends React.Component{
  constructor(props){
    debugger
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.repos)
    }
  }
  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData.name} </Text>
          <Text> {rowData.description} </Text>
          <Text> {rowData.html_url} </Text>
          <Text> Stars: {rowData.stargazers_count} </Text>
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
      </View>
    )
  }
};

module.exports = Repositories;
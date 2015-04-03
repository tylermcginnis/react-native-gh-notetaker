var React = require('react-native');

var {
  Text,
  View,
  Image,
  ListView
} = React;

var styles = {
  container: {
    flex: 1,
    marginTop: 65
  },
  name: {
    alignSelf: 'center',
    fontSize: 19,
    marginTop: 10,
    marginBottom: 5
  },
  handle: {
    alignSelf: 'center',
    fontSize: 14,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
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
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 14
  },
  rowContent: {
    fontSize: 19
  }
}

class Profile extends React.Component{
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: ds.cloneWithRows(['name', 'login', 'company', 'location', 'followers', 'following'])
    }
  }
  renderRow(rowData){
    var userInfo = this.props.userInfo;
    return userInfo[rowData] ? (
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {rowData[0].toUpperCase() + rowData.slice(1)} </Text>
            <Text style={styles.rowContent}> {userInfo[rowData]} </Text>
          </View>
          <View style={styles.separator} />
        </View>) :
    (<View />);
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }
};

module.exports = Profile;
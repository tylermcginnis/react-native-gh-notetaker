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
    marginTop: 65,
    flexDirection: 'column',
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
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    padding: 10
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
            <Text> {rowData[0].toUpperCase() + rowData.slice(1)} : {userInfo[rowData]} </Text>
          </View>
          <View style={styles.separator} />
        </View>) :
    (<View />);
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }
};

module.exports = Profile;
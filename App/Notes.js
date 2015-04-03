var React = require('react-native');
var api = require('./Network/api');
var Separator = require('./Separator');
var Badge = require('./Badge');

var {
  View,
  Text,
  ListView,
  TextInput,
  TouchableHighlight
} = React;

var styles = {
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    padding: 10
  },
  footerContainer: {
    backgroundColor: '#f5f5f5',
    height: 100,
    justifyContent: 'flex-end'
  }
}

class Notes extends React.Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: '',
      error: ''
    }
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    })
  }
  handleSubmit(){
    var note = this.state.note;
    this.setState({
      note: ''
    });
    api.addNote(this.props.userInfo.username, note)
      .then((res) => res.json())
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        api.getNotes(this.props.userInfo.username)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          });
      })
      .catch((error) => {
        console.log('Request failed', error);
        this.setState({error})
      });
  }
  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <Badge userInfo={this.props.userInfo}/>
        <TextInput
            style={styles.searchInput}
            value={this.state.note}
            onChange={this.handleChange.bind(this)}
            placeholder="New Note" />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="black">
              <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
      </View>
    )
  }
  render(){
    return (
      <View style={styles.container}>
          <ListView
            renderFooter = {this.footer.bind(this)}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow} />
      </View>
    )
  }
};

module.exports = Notes;
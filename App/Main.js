var React = require('react-native');
var githubAPI = require('./Network/githubAPI');
var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} = React;

class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(e){
    this.setState({
      username: e.nativeEvent.text
    })
  }
  handleResponse(res){
    this.props.navigator.push({
      title: res.name || 'Select an Option',
      component: Dashboard,
      passProps: {userInfo: res}
    });
    this.setState({
      isLoading: false,
      error: false
    });
  }
  handleSubmit(){
    this.setState({
      isLoading: true,
    });
    githubAPI.getBio(this.state.username)
      .then((response) => response.json())
      .then((jsonRes) => this.handleResponse(jsonRes))
      .catch((err) => {
        this.setState({
          isLoading: false,
          error: `There was an error: ${err}`
        })
      })
  }
  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    )
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Search for a Github User
        </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          placeholder="Github Username" />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="black">
            <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        {showErr}
      </View>
    );
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#656565'
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
});

module.exports = Main;
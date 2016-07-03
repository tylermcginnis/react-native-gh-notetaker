var React = require('react-native');

//this lesson ended without this component, so
//here it is in the minimal form so it will compile :>

var {
    Text,
    View
    } = React;

class Dashboard extends React.Component{
    render() {
        return (
            <View>
                <Text> This is the Dashboard </Text>
            </View>
        )
    }
}

module.exports = Dashboard

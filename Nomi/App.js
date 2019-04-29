import { withAuthenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
// Get the aws resources configuration parameters
import aws_exports from './aws-exports'; // if you are using Amplify CLI

Amplify.configure(aws_exports);


class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);
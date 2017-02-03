import React from 'react';
import {Button, Icon} from 'react-materialize';
import {} from '../stylesheets/application.scss';

class App extends React.Component {
	render() {
	  return (
			<Button node='a' waves='light'>button<Icon right>cloud</Icon></Button>
	  );
	}
}

export default App;

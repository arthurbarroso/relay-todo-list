import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from './relay/environment'

ReactDOM.render(<RelayEnvironmentProvider environment={environment}><App /></RelayEnvironmentProvider>, document.getElementById('root'));
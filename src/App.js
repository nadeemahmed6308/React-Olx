import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './config/router';
import {store, persistor} from './Store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;



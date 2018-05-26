import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import ExampleScreen from './views/ExampleScreen';

const store = createStore(reducers,
     {},
     compose(applyMiddleware(thunk)));

const App = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1, marginTop: 25,}}>
                <ExampleScreen />
            </View>
        </Provider>
    );
}

export default App;
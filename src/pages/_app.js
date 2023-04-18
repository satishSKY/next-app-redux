import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'shared/components/Loader/Loader';
import { useStore } from 'shared/redux/store';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    const persistor = persistStore(store, {}, function () {
        persistor.persist();
    });

    return (
        <Provider store={store}>
            <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

App.propTypes = {
    Component: PropTypes.node.isRequired,
    pageProps: PropTypes.object.isRequired
};

export default App;

import React from 'react';
import Pokemon from './Pokemon';
import {ReactQueryDevtools} from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    const [visible, setVisibility] = React.useState(false)
    return (
        <QueryClientProvider
            client={queryClient}
            contextSharing={true}
        >
            <button onClick={() => setVisibility(!visible)}>CLICK</button>
            <ReactQueryDevtools />
            {visible && <Pokemon />}
        </QueryClientProvider>
    )
}

export default App;
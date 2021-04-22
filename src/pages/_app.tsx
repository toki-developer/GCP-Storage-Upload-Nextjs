import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { apolloClient } from "src/apollo/apolloClient";

const App = (props: AppProps) => {
    return (
        <ApolloProvider client={apolloClient}>
            <props.Component {...props.pageProps}/>
        </ApolloProvider>
    )
}

export default App;
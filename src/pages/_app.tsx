import { AppProps } from "next/dist/next-server/lib/router/router";

const App = (props: AppProps) => {
    return (
            <props.Component {...props.pageProps}/>
    )
}

export default App;
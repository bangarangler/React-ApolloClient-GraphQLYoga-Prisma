import App, {Container} from 'next/app';
import Page from '../components/Page.js';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData.js';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // THIS EXPOSES QUERY TO THE USER
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const {Component, apollo, pageProps} = this.props;

    return (
      <Container>
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
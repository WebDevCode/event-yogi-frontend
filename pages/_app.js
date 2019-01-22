import App, { Container } from "next/app";
import Page from "../components/Page";
import "../static/index.scss";

class _App extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default _App;

import Head from "next/head";

const Meta = props => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Event Yogi!</title>
  </Head>
);

export default Meta;

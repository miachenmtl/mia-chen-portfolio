import * as React from "react";

import Layout from "../components/Layout";

import "../styles/globals.css";

interface MyAppProps {
  Component: React.ComponentType;
}

const MyApp = ({ Component }: MyAppProps): JSX.Element => {
  return (
    <React.StrictMode>
      <Layout>
        <Component />
      </Layout>
    </React.StrictMode>
  );
};

export default MyApp;

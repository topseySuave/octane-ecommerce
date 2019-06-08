import React from "react";

export default (WrappedComponent: React.SFC, functionsToCall?: any) => {
  return class extends React.Component {
    static async getInitialProps(props: any) {
      console.log('get props =====> ', props);
      console.log('functionsToCall ===> ', functionsToCall);
      functionsToCall && functionsToCall.map(async (func: () => void): Promise<void> => {
        typeof func === 'function' && await func();
        throw 'value is not a function';
      });
      return props;
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
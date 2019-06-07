import React from "react";

export default (WrappedComponent: React.SFC, functionsToCall?: any) => {
  // console.log('Hello', functionsToCall);
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

    // static componentDidMount() {
    //   console.log('Component did mount');
    // }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

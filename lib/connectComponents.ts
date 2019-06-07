import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const connectComponent = (Component: any, actions: object) => {
  const mapStateToProps = (state: any) => ({...state});
  
  const mapDispatchToProps = (dispatch: any) => bindActionCreators({...actions}, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default connectComponent;
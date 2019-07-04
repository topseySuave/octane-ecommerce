import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IStoreProps } from "./types";

const connectComponent = (Component: any, actions: object) => {
  const mapStateToProps = (state: IStoreProps) => ({...state});
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({...actions}, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default connectComponent;
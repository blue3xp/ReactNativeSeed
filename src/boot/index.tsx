import * as React from "react";
import Router from './router';
import { Provider } from "react-redux";
import configureStore from "./configureStore";
export interface Props { }
export interface State {
  store: Object;
  isLoading: boolean;
}
export default class Setup extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Router />
      </Provider>

    );
  }
}

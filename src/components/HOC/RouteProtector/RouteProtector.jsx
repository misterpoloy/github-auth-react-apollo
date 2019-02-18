import React from 'react';
import { withRouter } from 'react-router-dom'

export default (WrappedComponent) => {
  class RouteProtector extends React.Component {
    componentDidMount() {
      // avoid setState in render() Warning
      this.check();
    }

    componentDidUpdate() {
      // avoid setState in render() Warning
      this.check();
    }

    check = () => {
      if (!localStorage.getItem("github_token")) {
        this.props.history.push('/login')
      }
    }

    render() {
      return (
        <WrappedComponent { ...this.props } />
      );
    }
  }

   const RProutes = withRouter(RouteProtector)
   return (RProutes);   
  };

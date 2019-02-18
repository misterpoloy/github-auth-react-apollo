import React from 'react';
import { withRouter } from 'react-router-dom'

export default (WrappedComponent) => {
  class RouteProtector extends React.Component {
    componentDidUpdate() {
      // avoid setState in render() Warning
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

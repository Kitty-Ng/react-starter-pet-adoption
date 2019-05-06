import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorNBoundary caught an error', error, info);
    //this is a good place to send to error logging service i.e. sentry
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Return to Homepage</Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

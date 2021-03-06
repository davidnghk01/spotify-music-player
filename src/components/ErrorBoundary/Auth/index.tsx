import React from 'react';
import { Redirect } from 'react-router-dom';

import AppError from '../../../errors/AppError';

export default class AuthErrorBoundary extends React.Component<
  object,
  {
    error?: {
      err: Error | AppError;
      info: React.ErrorInfo;
    };
  }
> {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: {
        err: error,
        info: errorInfo,
      },
    });
    return;
  }

  render() {
    const { error } = this.state;
    if (error) {
      const err = error.err;
      if (err instanceof AppError && err.fallbackPath) {
        return <Redirect to={err.fallbackPath} />;
      }
      return <div data-testid="error-fallback">{err.message}</div>;
    }
    return this.props.children;
  }
}

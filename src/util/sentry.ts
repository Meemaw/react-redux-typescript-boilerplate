import * as Sentry from '@sentry/browser';

export default class SentryUtils {
  public static captureException = (error: Error | string): string => {
    const exception = typeof error === 'string' ? new Error(error) : error;
    console.error(exception);
    return Sentry.captureException(exception);
  };
}

import * as Sentry from '@sentry/browser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Extras = { [key: string]: any };

export default class SentryUtils {
  public static captureException = (
    error: Error | string,
    extras: Extras = {},
  ): Promise<string> => {
    const exception = typeof error === 'string' ? new Error(error) : error;
    console.error(exception);

    return new Promise<string>(resolve => {
      Sentry.withScope(scope => {
        scope.setExtras(extras);
        const errorId = Sentry.captureException(exception);
        resolve(errorId);
      });
    });
  };
}

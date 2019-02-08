const assertWithTimeout = (assertion: any, done: any, timeout = 1000) => {
  const start = Date.now();
  const didTimeout = () => Date.now() - start >= timeout;

  const assert = () => {
    try {
      assertion();
      done();
    } catch (err) {
      if (didTimeout()) {
        done.fail(err);
      } else {
        setTimeout(assert, 10);
      }
    }
  };

  assert();
};

export default assertWithTimeout;

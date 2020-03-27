import { StoryFn, StoryContext } from '@storybook/addons';

import useSandbox, { SetupMocks } from './useSandbox';

function mockDecorator<T, F>(setupMocks: SetupMocks<T>) {
  return (storyFn: StoryFn<F>, context: StoryContext) => {
    useSandbox(setupMocks);
    return storyFn(context);
  };
}

export default mockDecorator;

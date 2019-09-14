import { addDecorator, configure } from '@storybook/react';
import withProviders from './providers';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withProviders);

configure(loadStories, module);

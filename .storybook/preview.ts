import { addDecorator, configure } from '@storybook/react';
import withProviders from './providers';

addDecorator(withProviders);

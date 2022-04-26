import type {
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';

import { App } from './src/containers/App';
import { Layout } from './src/containers/Layout';

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs | WrapRootElementNodeArgs) => {
  return <App>{element}</App>;
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};

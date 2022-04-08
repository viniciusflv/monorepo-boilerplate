import {
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
  WrapRootElementBrowserArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';

import { App } from './src/containers/App';
import { Layout } from './src/containers/Layout';

export const wrapRootElement = (
  props: WrapRootElementNodeArgs | WrapRootElementBrowserArgs,
) => {
  return <App>{props.element}</App>;
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  return props.path ? <Layout {...props}>{element}</Layout> : element;
};

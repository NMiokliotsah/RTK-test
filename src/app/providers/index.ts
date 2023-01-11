import compose from 'compose-function';
import { withRouter } from './withRoute';
import { withStore } from './withStore';

export const withProviders = compose(withRouter, withStore);

import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';

function useBindDispatch<A, C extends ActionCreator<A>>(actionCreator: C): C;

function useBindDispatch<A, M extends ActionCreatorsMapObject<A>>(actionCreators: M): M;

function useBindDispatch(cb: any) {
  const dispatch = useDispatch();
  const dispatched = React.useMemo(() => bindActionCreators(cb, dispatch), [dispatch, cb]);

  return dispatched;
}

export default useBindDispatch;

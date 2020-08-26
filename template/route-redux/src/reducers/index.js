const initData = {
  count: 0,
}

const handle = {
  'TEST_ADD': (state, action) => ({ ...state, count: state.count + action.payload.data })
}

export default (state, action) => {
  const func = handle[action.type];
  const _state = state || initData;
  if(typeof func !== 'function') {
    return _state;
  }
  return func(_state, action);
}
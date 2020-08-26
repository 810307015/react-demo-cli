const testAdd = (option = {}) => {
  const {
    data
  } = option;

  return {
    type: 'TEST_ADD',
    payload: {
      data
    }
  }
}

export {
  testAdd
}
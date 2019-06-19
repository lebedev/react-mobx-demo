import validateState from './validate';

it('accepts correct inputs', () => {
  const inputSingleBox = { type: 'box' };
  const inputSingleColoredBox = { type: 'box', color: 'dodgerblue' };
  const inputSingleContainer = { type: 'container', items: [] };
  const inputComplexContainer = { type: 'container', items: [
      { type: 'box' },
      { type:'container', items: [
          { type: 'box', color:'green' },
          { type: 'box', color:'red' },
      ]}
  ]};

  expect(() => {
    validateState(inputSingleBox);
    validateState(inputSingleColoredBox);
    validateState(inputSingleContainer);
    validateState(inputComplexContainer);
  }).not.toThrow();
});

it('throws on inputs without "type" property', () => {
  const inputString = "test";
  const inputNumber = 4;
  const inputArray = [];
  const inputObject = {};

  expect(() => {
    validateState(inputString);
  }).toThrow();

  expect(() => {
    validateState(inputNumber);
  }).toThrow();

  expect(() => {
    validateState(inputArray);
  }).toThrow();

  expect(() => {
    validateState(inputObject);
  }).toThrow();
});

it('throws on inputs with unrecognized "type" property', () => {
  const inputTypeString = { type: 'test' };
  const inputTypeNonString = { type: [] };

  expect(() => {
    validateState(inputTypeString);
  }).toThrow();

  expect(() => {
    validateState(inputTypeNonString);
  }).toThrow();
});

it('throws on inputs with extra fields', () => {
  const inputBoxExtraFields = { type: 'box', extra: 'field' };
  const inputContainerExtraFields = { type: 'container', items: [], extra: 'field' };

  expect(() => {
    validateState(inputBoxExtraFields);
  }).toThrow();

  expect(() => {
    validateState(inputContainerExtraFields);
  }).toThrow();
});

it('throws on input boxes with unrecognized colors', () => {
  const inputBoxIncorrectColor1 = { type: 'box', color: 'test' };
  const inputBoxIncorrectColor2 = { type: 'box', color: 4 };
  const inputBoxIncorrectColor3 = { type: 'box', color: '#ff' };

  expect(() => {
    validateState(inputBoxIncorrectColor1);
  }).toThrow();

  expect(() => {
    validateState(inputBoxIncorrectColor2);
  }).toThrow();

  expect(() => {
    validateState(inputBoxIncorrectColor3);
  }).toThrow();
});

it('throws on input containers with incorrect "items" field or without it', () => {
  const inputContainerWithoutItems = { type: 'container' };
  const inputContainerIncorrectItems1 = { type: 'container', items: 3 };
  const inputContainerIncorrectItems2 = { type: 'container', items: {} };

  expect(() => {
    validateState(inputContainerWithoutItems);
  }).toThrow();

  expect(() => {
    validateState(inputContainerIncorrectItems1);
  }).toThrow();

  expect(() => {
    validateState(inputContainerIncorrectItems2);
  }).toThrow();
});

it('throws on input containers with incorrect items', () => {
  const inputContainerIncorrectItems1 = { type: 'container', items: [{ type: 'test' }] };
  const inputContainerIncorrectItems2 = { type: 'container', items: [{ type: 'box' }, { type: 'box', color: 'test' }] };
  const inputContainerIncorrectItems3 = { type: 'container', items: [{ type: 'box' }, { type: 'box', color: 'red' }, 4] };

  expect(() => {
    validateState(inputContainerIncorrectItems1);
  }).toThrow();

  expect(() => {
    validateState(inputContainerIncorrectItems2);
  }).toThrow();

  expect(() => {
    validateState(inputContainerIncorrectItems3);
  }).toThrow();
});

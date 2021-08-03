import { expect } from "chai";
import { todos } from '../../Redux/reducers';

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = { text: 'hello', isCompleted: false };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeTodo,
      }
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it('Removes a todo when REMOVE_TODO is received', () => {
    const fakeTodo = {
      text: 'Goodbye',
      isCompleted: true,
      id: '1234'
    }
    const fakeAction = {
      type: 'REMOVE_TODO',
      payload: fakeTodo
    }
    const originalState = { isLoading: false, data: [fakeTodo] };

    const expected = {
      isLoading: false,
      data: []
    }
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
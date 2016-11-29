import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
    expect(commentReducer({ lul: 1 }, {})).to.eql({ lul: 1 });
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new_comment' };
    expect(commentReducer([], action)).to.eql(['new_comment']);
  });
});

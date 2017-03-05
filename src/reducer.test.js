import reducer from './reducer';

describe('reducer', () => {
  it("returns 'helloWorld' as *stringName* on action type *init*", () => {
    expect(reducer(undefined, { type: 'init' }).stringName).toBe('helloWorld');
  });
  it('returns the given *state* as a default', () => {
    expect(
      reducer({ stringName: 'waffles' }, { type: 'not-init' }).stringName
    ).toBe('waffles');
  });
});

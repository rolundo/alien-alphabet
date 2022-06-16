const { solution } = require('./alpha-order')
const { testCases, invalidTestCases } = require('./test-cases')

test.each(testCases)(
  'take valid input and return characters in alphabetical order',
  (input, output) => {
    expect(solution(input)).toEqual(output)
  }
)

test.each(invalidTestCases)(
  'take invalid input and return empty array',
  (input, output) => {
    expect(solution(input)).toEqual(output)
  }
)

const { Airport, Plane } = require('..')

test('Airport is a class', () => {
  expect(Airport).toBeInstanceOf(Function)
})

test('Airport instance', () => {
  const airport = new Airport(3, 5)

  expect(airport.planes.length).toBe(5)
  expect(airport.tarmacs.length).toBe(3)
})

test('Plane.fly', () => {
  const plane = new Plane()

  expect(plane.fly('Paris')).resolves.toBe(undefined)
  expect(plane.fly('Paris', true)).rejects.toBeInstanceOf(Error)
})

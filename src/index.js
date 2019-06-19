class Airport {
  constructor(nTarmacs, nPlanes) {
    this.tarmacs = []
    this.planes = []

    for (let i = 0; i < nTarmacs; i++) {
      this.addTarmac(new Tarmac())
    }

    for (let i = 0; i < nPlanes; i++) {
      this.addPlane(new Plane())
    }
  }

  addTarmac(tarmac) {
    if (!(tarmac instanceof Tarmac)) {
      throw new Error('First arg must be an instance of Tarmac')
    }

    this.tarmacs.push(tarmac)
  }

  addPlane(plane) {
    if (!(plane instanceof Plane)) {
      throw new Error('First arg must be an instance of Plane')
    }

    this.planes.push(plane)
  }
}

class Tarmac {
  constructor() {
    this.id = createId()
  }
}

const destinationToDuration = {
  Paris: 2000,
  Tokyo: 3000,
}

class Plane {
  constructor() {
    this.id = createId()
  }

  fly(destination = 'Paris', sabotage) {
    const duration = destinationToDuration[destination] || 1000

    return new Promise((resolve, reject) => {
      console.log('Fly to', destination, 'duration', duration)

      if (sabotage) return reject(new Error('Crash!'))

      setTimeout(resolve, duration)
    })
  }
}

function createId() {
  return Math.random().toString().slice(2)
}

module.exports = { Airport, Plane, Tarmac }

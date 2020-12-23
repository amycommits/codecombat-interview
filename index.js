// set take in a key and value, and sets it
// get key, returns value
// someName = {key: 'value'}
const KEY_LIMIT = 5
const keyStorage = []
const someDataStructure = {
  someStorage: {},
  get: function (thisKey) {
    return this.someStorage[thisKey]
  },
  set: function (thisKey, thisValue) {
    if (
      !this.someStorage[thisKey] &&
      Object.keys(this.someStorage).length > KEY_LIMIT
    ) {
      // implment LRU cache and delete oldest key
      const deletedKey = keyStorage.shift()
      delete this.someStorage[deletedKey]
    }
    keyStorage.push(thisKey)
    this.someStorage[thisKey] = thisValue
  }
}

// someDataStructure.set('pretty','pink')
// console.log(someDataStructure.get('pretty'))

for (let i = 0; i < 7; i++) {
  someDataStructure.set(i, i)
  console.log(someDataStructure.get(i))
}
console.log(someDataStructure.someStorage)

// more

const randomDataStructure = {
  data: {},
  get: function (key) {
    return this.data[key]
  },
  set: function (obj) {
    for (const [key, value] of Object.entries(obj)) {
      this.data[key] = value
    }
  }
}

randomDataStructure.set({ pretty: 'pink' })

randomDataStructure.get('pretty')

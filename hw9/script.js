// ex 1

const toBoolean = (arr) => arr.map((num) => num > 0)

const res = toBoolean([1, 2, -20, 4, -5])

// ex 1.2

const users = [
    {
      name: 'Sam',
      role: 'admin'
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin'
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin'
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client'
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client'
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest'
      age: 17,
    },
]

const filterAdultAdmin = (dataArr) => {
    return dataArr 
    .filter((user) => user.age >= 18 && user.role === 'admin')
    .map((user) => user.name)
}
  
  const adultAdmins = filterAdultAdmin(users); // [Sam, Pablo]
  console.log(adultAdmins)
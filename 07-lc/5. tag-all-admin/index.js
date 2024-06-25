// input: arr, arr
// output: new arr

// algo
// 1. iterate users
// 2. compare id users and adminIds
// 3. return new arr with admin users

function markAdmins(usersList, adminIds) {
  return usersList.map(user => ({
    ...user,
    isAdmin: adminIds.includes(user.id),
  }));
}

// examples
const adminIds = ['1', '3'];
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];

console.log(markAdmins(users, adminIds));

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];

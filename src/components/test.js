const tableData = [
  {
    person: {
      name: 'Prerna Jha',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'prernajha@gmail.com',
    joiningDate: '12/02/2018',
    role: 'UI Designer',
  },
  {
    person: {
      name: 'Rukmini Pandit',
      avatar: 'profile.jpg',
    },
    city: 'Delhi',
    email: 'rukminipandit@gmail.com',
    joiningDate: '09/02/2022',
    role: 'Front-end Developer',
  },
  {
    person: {
      name: 'Nandhini Lingesh',
      avatar: 'profile.jpg',
    },
    city: 'Delhi',
    email: 'nandhinilingesh@gmail.com',
    joiningDate: '30/06/2019',
    role: 'UX Designer',
  },
  {
    person: {
      name: 'Ankit Singh',
      avatar: 'profile.jpg',
    },
    city: 'Kolkata',
    email: 'ankitsingh@gmail.com',
    joiningDate: '11/11/2017',
    role: 'Backend Developer',
  },
  {
    person: {
      name: 'Amith Kumar',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'amithkumar@gmail.com',
    joiningDate: '24/07/2020',
    role: 'Front-end Developer',
  },
  {
    person: {
      name: 'Shalini Singhla',
      avatar: 'profile.jpg',
    },
    city: 'Mumbai',
    email: 'shalinisinghla@gmail.com',
    joiningDate: '17/09/2017',
    role: 'UX Designer',
  },
  {
    person: {
      name: 'Abhishek Singh',
      avatar: 'profile.jpg',
    },
    city: 'Kolkata',
    email: 'abhisheksingh@gmail.com',
    joiningDate: '01/06/2017',
    role: 'Front-end Developer',
  },
];

function myCompare(date1, date2) {
  var day1 = date1.substr(0, 2);
  var month1 = date1.substr(3, 2);
  var year1 = date1.substr(6, 4);

  var day2 = date2.substr(0, 2);
  var month2 = date2.substr(3, 2);
  var year2 = date2.substr(6, 4);

  // Condition to check the year
  if (year1 < year2) return -1;
  if (year1 > year2) return 1;

  // Condition to check the month
  if (month1 < month2) return -1;
  if (month1 > month2) return 1;

  // Condition to check the day
  if (day1 < day2) return -1;
  if (day1 > day2) return 1;
}
const sorted = [...tableData].sort((a, b) =>
  myCompare(b.joiningDate, a.joiningDate)
);

console.log(sorted);

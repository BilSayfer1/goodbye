// let students = [
//     {
//         name: "Hasan",
//         age: "2008-07-28",
//         gender: 'm'
//     },
//     {
//         name: "Alsafir",
//         age: "2008-10-13",
//         gender: 'm'
//     },
//     {
//         name: "Allayor",
//         age: "2008-06-24",
//         gender: 'w'
//     },
//     {
//         name: "Radmir",
//         age: "2007-04-28",
//         gender: 'w'
//     },
//     {
//         name: "Jaxongir",
//         age: "2006-09-03",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2007-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2006-04-12",
//         gender: 'm'
//     },
//     {
//         name: "Bexruz",
//         age: "2009-11-27",
//         gender: 'w'
//     },
//     {
//         name: "Alibek",
//         age: "2012-04-12",
//         gender: 'm'
//     },
// ]


// // let currentdate = new Date()

// // let age15 = []


// // for(let student of students) {
// //     let birthday = new Date(student.age)

// //     let agedifference = currentdate.getFullYear() - birthday.getFullYear()
// //     if(agedifference < 15) {
// //         age15.push(student)
// //     }

// // }

// // console.log(age15);




let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]

let categoryMap = categories.reduce((a, category) => {
    a[category.course.trim().toUpperCase()] = category;
    return a;
}, {});

for (let student of arr) {
    let faculity = student.info.faculity.toUpperCase().trim();

    if (categoryMap[faculity]) {
        categoryMap[faculity].count++;
    }
}

console.log(categories);






const EmpolyeeData = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "12345",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete the project documentation",
        "date": "2024-12-05",
        "category": "Work",
        "active": true,
        "failed": false,
        "complete": false,
        "new": true
      },
      {
        "title": "Task 2",
        "description": "Prepare for the team meeting",
        "date": "2024-12-06",
        "category": "Work",
        "active": false,
        "failed": false,
        "complete": true,
        "new": false
      },
      {
        "title": "Task 3",
        "description": "Submit the weekly report",
        "date": "2024-12-07",
        "category": "Work",
        "active": false,
        "failed": true,
        "complete": false,
        "new": false
      }
      // Add more tasks as needed
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "12345",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Review project requirements",
        "date": "2024-12-05",
        "category": "Work",
        "active": true,
        "failed": false,
        "complete": false,
        "new": true
      },
      {
        "title": "Task 2",
        "description": "Design the UI for the new app",
        "date": "2024-12-06",
        "category": "Work",
        "active": false,
        "failed": true,
        "complete": false,
        "new": false
      },
      {
        "title": "Task 3",
        "description": "Send the proposal to the client",
        "date": "2024-12-07",
        "category": "Work",
        "active": false,
        "failed": false,
        "complete": true,
        "new": false
      }
      // Add more tasks as needed
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "12345",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Conduct a code review",
        "date": "2024-12-05",
        "category": "Work",
        "active": true,
        "failed": false,
        "complete": false,
        "new": true
      },
      {
        "title": "Task 2",
        "description": "Write unit tests",
        "date": "2024-12-06",
        "category": "Work",
        "active": false,
        "failed": true,
        "complete": false,
        "new": false
      },
      {
        "title": "Task 3",
        "description": "Update the project roadmap",
        "date": "2024-12-07",
        "category": "Work",
        "active": false,
        "failed": false,
        "complete": true,
        "new": false
      }
      // Add more tasks as needed
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "12345",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Fix bugs in the existing application",
        "date": "2024-12-05",
        "category": "Work",
        "active": true,
        "failed": false,
        "complete": false,
        "new": true
      },
      {
        "title": "Task 2",
        "description": "Prepare a presentation for the client",
        "date": "2024-12-06",
        "category": "Work",
        "active": false,
        "failed": true,
        "complete": false,
        "new": false
      },
      {
        "title": "Task 3",
        "description": "Conduct user testing",
        "date": "2024-12-07",
        "category": "Work",
        "active": false,
        "failed": false,
        "complete": true,
        "new": false
      }
      // Add more tasks as needed
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "12345",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Analyze user feedback",
        "date": "2024-12-05",
        "category": "Work",
        "active": true,
        "failed": false,
        "complete": false,
        "new": true
      },
      {
        "title": "Task 2",
        "description": "Plan the next sprint",
        "date": "2024-12-06",
        "category": "Work",
        "active": false,
        "failed": true,
        "complete": false,
        "new": false
      },
      {
        "title": "Task 3",
        "description": "Update documentation",
        "date": "2024-12-07",
        "category": "Work",
        "active": false,
        "failed": false,
        "complete": true,
        "new": false
      }
      // Add more tasks as needed
    ]
  }
]

const AdminData = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "12345"
  }
]


export const SetLocalStorage = () => {
  localStorage.setItem('Empolyee', JSON.stringify(EmpolyeeData))
  localStorage.setItem('Admin', JSON.stringify(AdminData))
}

export const GetLocalStorage = () => {
  const empData = JSON.parse(localStorage.getItem('Empolyee'))
  const admnData = JSON.parse(localStorage.getItem('Admin'))

  console.log(empData, admnData)
}
const employees = [
    {
      "id": 1,
      "name": "Raj",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Fix UI bug",
          "task_description": "Resolve alignment issues on the homepage the end",
          "task_date": "2025-02-20",
          "task_category": "Frontend",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Optimize database queries",
          "task_description": "Improve the speed of API responses the end",
          "task_date": "2025-02-18",
          "task_category": "Backend",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        },
        {
          "task_title": "Refactor CSS",
          "task_description": "Simplify and improve styles for maintainability the end",
          "task_date": "2025-02-19",
          "task_category": "Frontend",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false,
          "priority": "Low"
        },
        {
          "task_title": "Add dark mode",
          "task_description": "Implement dark mode toggle in UI the end",
          "task_date": "2025-02-21",
          "task_category": "UI/UX",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Fix mobile responsiveness",
          "task_description": "Ensure pages look good on mobile devices the end",
          "task_date": "2025-02-22",
          "task_category": "Frontend",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        }
      ],
      "task_counts": {
        "active": 2,
        "new_task": 1,
        "completed": 2,
        "failed": 0
      }
    },
    {
      "id": 2,
      "name": "Amit",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Implement authentication",
          "task_description": "Add JWT authentication for users the end",
          "task_date": "2025-02-21",
          "task_category": "Security",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Update dashboard",
          "task_description": "Redesign the admin dashboard UI the end",
          "task_date": "2025-02-19",
          "task_category": "UI/UX",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        },
        {
          "task_title": "Fix login bug",
          "task_description": "Resolve issue where login fails randomly the end",
          "task_date": "2025-02-17",
          "task_category": "Bug Fix",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "priority": "Low"
        },
        {
          "task_title": "Write API tests",
          "task_description": "Ensure API endpoints are tested the end",
          "task_date": "2025-02-22",
          "task_category": "Testing",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Improve logging system",
          "task_description": "Enhance logging for better debugging the end",
          "task_date": "2025-02-23",
          "task_category": "Backend",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "priority": "Normal"
        }
      ],
      "task_counts": {
        "active": 2,
        "new_task": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 3,
      "name": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "Deploy new version",
          "task_description": "Push latest updates to production the end",
          "task_date": "2025-02-22",
          "task_category": "DevOps",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Fix security vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        },
        {
          "task_title": "Enhance search functionality",
          "task_description": "Improve search performance and accuracy the end",
          "task_date": "2025-02-20",
          "task_category": "Frontend",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "priority": "Low"
        }
      ],
      "task_counts": {
        "active": 1,
        "new_task": 2,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 4,
      "name": "vivek",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "edit new version",
          "task_description": "Push latest updates to production the end",
          "task_date": "2025-02-22",
          "task_category": "DevOps",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Fix security vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        },
        {
          "task_title": "Enhance search functionality",
          "task_description": "Improve search performance and accuracy the end",
          "task_date": "2025-02-20",
          "task_category": "Frontend",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "priority": "Low"
        },
        {
          "task_title": "Fix security vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "low"
        },
        {
          "task_title": "Fix vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        }
      ],
      "task_counts": {
        "active": 1,
        "new_task": 2,
        "completed": 0,
        "failed": 2
      }
    },
    {
      "id": 5,
      "name": "karthik",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "task_title": "upload new version",
          "task_description": "Push latest updates to production the end",
          "task_date": "2025-02-22",
          "task_category": "DevOps",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "priority": "High"
        },
        {
          "task_title": "Fix vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        },
        {
          "task_title": "Enhance search functionality",
          "task_description": "Improve search performance and accuracy the end",
          "task_date": "2025-02-20",
          "task_category": "Frontend",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "priority": "Low"
        },
        {
          "task_title": "Fix security vulnerability",
          "task_description": "Patch the recent SQL injection issue the end",
          "task_date": "2025-02-19",
          "task_category": "Security",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "priority": "Normal"
        }
      ],
      "task_counts": {
        "active": 2,
        "new_task": 0,
        "completed": 2,
        "failed": 1
      }
    }
  ]

const admin = [
  {
    "id": 1,
    'name' : 'vemunuri',
    "email": "admin@e.com",
    "password": "123"
  },
]
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = localStorage.getItem('employees')
  const admin = localStorage.getItem('admin')
  return { employees, admin }
}
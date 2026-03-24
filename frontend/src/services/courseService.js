const API_URL = "http://localhost:5000/api/courses"

export const getCourses = async () => {
  const res = await fetch(API_URL)
  return res.json()
}

export const createCourse = async (course) => {
  const token = localStorage.getItem("token")

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(course),
  })

  return res.json()
}

export const deleteCourse = async (id) => {
  const token = localStorage.getItem("token")

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.json()
}
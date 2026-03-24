const API = "http://localhost:5000/api/lessons"

export const getLessons = async (courseId) => {
  const res = await fetch(`${API}/${courseId}`)
  return res.json()
}

export const createLesson = async (lesson) => {
  const token = localStorage.getItem("token")

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(lesson),
  })

  return res.json()
}

export const deleteLesson = async (id) => {
  const token = localStorage.getItem("token")

  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
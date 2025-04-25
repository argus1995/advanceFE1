import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { nanoid } from 'nanoid'

const useCourseStore = create(
    persist(
        (set) => ({
            courses: [],
            addCourse: (course) =>
                set((state) => ({
                    courses: [...state.courses, { ...course, id: nanoid() }],
                })),
            updateCourse: (updatedCourse) =>
                set((state) => ({
                    courses: state.courses.map((course) =>
                        course.id === updatedCourse.id ? updatedCourse : course
                    ),
                })),
            deleteCourse: (id) =>
                set((state) => ({
                    courses: state.courses.filter((course) => course.id !== id),
                })),
        }),
        {
            name: 'course-storage',
            getStorage: () => localStorage,
        }
    )
)

export default useCourseStore
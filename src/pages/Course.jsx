import React, { useState } from 'react';
import CourseForm from '../components/CourseForm'
import CourseList from '../components/CourseList'
import '../css/course.css'

function Course() {
    const [editCourse, setEditCourse] = useState(null)

    return (
        <main className="course-main">
            <CourseForm
                editCourse={editCourse}
                setEditCourse={setEditCourse}
            />
            <CourseList
                setEditCourse={setEditCourse}
            />
        </main>
    )
}

export default Course
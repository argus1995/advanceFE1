import React from 'react';
import useCourseStore from '../store/courseStore';

function CourseList({ setEditCourse }) {
    const { courses, deleteCourse } = useCourseStore()

    return (
        <div className="course-list-container">

            {courses.length === 0 ? (
                <p className="no-courses">No courses available.</p>
            ) : (courses.map((course) => (
                <div className="course-card" key={course.id}>
                    <div className="course-header">
                        <p>12 / 12 Modul Terselesaikan</p>
                        <span>Selesai</span>
                    </div>
                    <div className="course-body">
                        <img src="/card-1.jpg" alt="" />
                        <div className="course-description">
                            <div className="cd-1">
                                <h6>{course.title}</h6>
                                <p>{course.description}</p>
                            </div>
                            <div className="cd-2">
                                <img src="/avatar-card-1.png" alt="" />
                                <div className="cd-2-1">
                                    <p>{course.author}</p>
                                    <p>Senior Accountant di Gojek</p>
                                </div>
                            </div>
                            <div className='cd-3'>
                                <button onClick={() => setEditCourse(course)} className='btn'>Edit</button>
                                <button onClick={() => deleteCourse(course.id)} className="btn delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )))
            }
        </div>
    )
}

export default CourseList
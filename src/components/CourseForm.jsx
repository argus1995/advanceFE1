import React from 'react'
import { useState, useEffect } from 'react'
import useCourseStore from '../store/courseStore';
import useAuthStore from '../store/authStore';

function CourseForm({ editCourse, setEditCourse }) {
    const { addCourse, updateCourse } = useCourseStore()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const user = useAuthStore((state) => state.user)

    useEffect(() => {
        if (editCourse) {
            setTitle(editCourse.title)
            setDescription(editCourse.description)
            setAuthor(editCourse.author)
        }
    }, [editCourse])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editCourse) {
            updateCourse({ ...editCourse, title, description, author })
            setEditCourse(null)
        } else {
            addCourse({ title, description, author })
        }
        setTitle('')
        setDescription('')
        setAuthor('')
    };

    return (
        <div className="course-form">
            <div className="title">
                <h5>Course Form</h5>
                <p>Welcome, {user?.name}!</p>
                <p>Your email: {user?.email}</p>
            </div>
            <form className="course-form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="title">Title <span>*</span></label>
                        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div >
                    <div className="input-group">
                        <label htmlFor="description">Description <span>*</span></label>
                        <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div >
                    <div className="input-group">
                        <label htmlFor="author">Author <span>*</span></label>
                        <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    </div >
                    <div className="button-group">
                        <button type="submit" className="btn" id="btn-masuk">{editCourse ? 'Update' : 'Add'} Course</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CourseForm
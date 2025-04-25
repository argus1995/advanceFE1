export default function Cards({ course, img, avatar }) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={img} alt="" />
                <div className="card-content">
                    <div className="card-description">
                        <h6>{course.title}</h6>
                        <p>{course.description}</p>
                    </div>
                    <div className="card-avatar">
                        <img src={avatar} alt="" />
                        <div className="card-user">
                            <h6>{course.author}</h6>
                            <p>Senior Accountant <span>di Gojek</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="rating">
                    <img src="/rating.png" alt="" />
                    <p>3.5 (86)</p>
                </div>
                <h4>Rp 300K</h4>
            </div>
        </div>
    )
}
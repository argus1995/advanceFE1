export default function Tabs(props) {
    return (
        <div className="tab-container">
            <div className="tab-title">
                <a href="#" className={`${props.id === 1 && 'active'}`}>{props.name}</a>
            </div>
            <div className={`${props.id === 1 && 'active-line'}`}></div>
        </div>
    )
}


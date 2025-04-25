export default function FooterMenu({id, title, menu}) {
    return (
        <div className="menu-column" key={id}>
            <p>{title}</p>
            <div className="menu-list">
                {menu.map((menu, idx) => (
                    <a href="" key={idx}>{menu}</a>
                ))}
            </div>
        </div>
    )
}
import "./Tag.scss"
function Tag({ name }) {
    const tag = name.toUpperCase()
    return <span className="tags__container-tag">{tag}</span>
}

export default Tag

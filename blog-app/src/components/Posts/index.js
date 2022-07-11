import './styles.css'

export default function Post({date, title, content}) {
    return (
        <div className="container-post">
            <p className='date-post'>{date}</p>
            <h1 className='title-post'>{title}</h1>
            <p className='content-post'>{content}</p>
        </div>
    )
}
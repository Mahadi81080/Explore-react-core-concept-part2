export default function Post({post}){
    const {title ,body}=post
    return(
        <div className="postStyle">
            <h3>Title : {title}</h3>
            <p><small>Body : {body}</small></p>
        </div>
    )
}
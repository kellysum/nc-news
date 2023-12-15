
import CommentAdder from "./CommentAdder"
import CommentList from "./CommentList"
import DeleteComment from "./DeleteComment"
import SingleArticle from "./SingleArticle"



const SingleArticlePage =()=>{
    return(
        <>
        <SingleArticle/>
        <CommentAdder/>
        <CommentList/>
        <DeleteComment/>
        </>
    )
}
export default SingleArticlePage
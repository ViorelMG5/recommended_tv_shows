import { StarFill, StarHalf, Star as StarEmpty} from "react-bootstrap-icons"
import uniqid from 'uniqid'

function Rating({voteScore}) {
    const starList = [];
    const starFillCount = Math.floor(voteScore);
    const hasHalfStar = voteScore - parseInt(voteScore) >= 0.5
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={'star-fill' + i}></StarFill>)

    }
    
    if(hasHalfStar){
        starList.push(<StarHalf key={'star-half' + uniqid()}/>)
    } 
    
    for (let i = 1; i <= emptyStarCount; i++) {
        if(emptyStarCount) {
            starList.push(<StarEmpty key={'star-empty' + i}></StarEmpty>)
        }
    }

return (
    <div>
        {starList}
    </div>
)

}

export default Rating;
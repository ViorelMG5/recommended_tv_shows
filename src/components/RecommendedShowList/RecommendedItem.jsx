import { BACKDROP_LOW_URL } from "../../config"

export default function ListItem({title, img, onClick, tvShow}) {

    const onClick_ = ()=> {
       return onClick(tvShow)
    }
    return ( 
        <div onClick={onClick_} className="card-item">
            <img alt={title} src={`${BACKDROP_LOW_URL}${img}`}/>
            <span className="title">{title}</span>
        </div>
    )
}
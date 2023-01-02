import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import Rating from "../Rating/rating";

// export default function SearchBar({getShow}) {

//     function submit(e) {
//         if(e.key === 'Enter' && e.target.value.trim() !== '') {
//             getShow(e.target.value)
//         }
//     }

//     return (
//         <>
//             <Search className="search_icon"/>
//             <input
//                 className="search_input"
//                 placeholder="Cauta un show tv"
//                 onKeyUp={submit}
//             />
//         </>
//     )
// }
export default function SearchBar({ showList, getShowList, getShow }) {
  const [initialState, setInitialState] = useState("");

  function onChange(e) {
    // if(e.target.value.trim() !== '') {
    // getShowList(e.target.value)
    setInitialState(e.target.value);
    getShowList(initialState);
    // } else {
    //     setInitialState(e.target.value)
    // }
  }

  return (
    <>
      <Search className="search_icon" />
      <input
        className="search_input"
        placeholder="Search a tv show"
        value={initialState}
        onChange={onChange}
      />
      <ul className={`results ${showList.length > 0 ? "d-block" : "d-none"} `}>
        {showList.length > 0 &&
          showList.map((item) => (
            <li
              onClick={() => {
                getShow(item);
                setInitialState("");
              }}
              key={item.id}
              className="list_item"
            >
              {item.name}
              {item.vote_average > 0 ? (
                <Rating voteScore={item.vote_average / 2} />
              ) : (
                <span className="no_rating">Nu are rating</span>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}

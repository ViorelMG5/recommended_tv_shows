export  function Video({videoReq}) {
 
  

    return (
        <>
        {
            videoReq !== undefined ?
            <iframe
                src={`https://www.youtube.com/embed/${videoReq}?autoplay=1&mute=0`}>
            </iframe> 
            : <div></div>

        }
        </>
    )
    
}
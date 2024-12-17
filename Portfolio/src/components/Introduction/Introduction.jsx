const Introduction=({text,imageSrc,imageClass,additionalTextClass})=>{
    return(
        <div className="big_tx_div" >
            <div className={`big_tx ${additionalTextClass || ""}`}>{text}</div>
            {imageSrc &&(
                <img src={imageSrc} alt="" className={`green_symbol ${imageClass || ''}`} />
            )}
            
        </div>
    )
}
export default Introduction;
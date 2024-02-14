function Celeb(){
    let celeb = ["/images/Celeb/c1.webp","/images/Celeb/c2.webp","/images/Celeb/c3.webp","/images/Celeb/c4.webp","/images/Celeb/c5.webp",];
    return(
        <>
            <div className="mb-[150px]">
                <div><h3>Shop by LifeStyle</h3></div>
                <div className="flex flex-row gap-[20px]">{celeb.map((item) => (
                    <div>
                    <div ><img className="h-[430px] w-[300px]" src={item} alt="" /></div>
                </div>
                ))}
                </div>
            </div>
        </>
    )
}
export default Celeb
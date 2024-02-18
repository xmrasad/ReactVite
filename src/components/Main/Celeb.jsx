function Celeb(){
    let celeb = ["/images/Celeb/c1.webp","/images/Celeb/c2.webp","/images/Celeb/c3.webp","/images/Celeb/c4.webp","/images/Celeb/c5.webp",];
    return(
        <>
            <div className="mb-[150px]">
                <div><h3>Shop by LifeStyle</h3></div>
                <div className="flex flex-row gap-[20px] justify-center">{celeb.map((item) => (
                    <div>
                    <div ><img className=" w-[250px]" src={item} alt="" /></div>
                    <div className="flex flex-col justify-center items-center bg-cyan-100 h-[80px] rounded-b-lg"><h2 className="flex">For Entertainment</h2>
                        <h3 className="flex">View All</h3></div>
                </div>
                ))}
                </div>
            </div>
        </>
    )
}
export default Celeb
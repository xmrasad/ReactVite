import bgvideo from "/public/videos/121.mp4"
function Bestseller(){
    return(
        <>
            <div>
                <div><h2>Explore BestSeller</h2></div>
                <div>
                    <div><video className="w-[300px] rounded-xl" autoPlay loop><source src={bgvideo} type="video/mp4" /></video></div>
                </div>
            </div>
        </>
    )
}

export default Bestseller
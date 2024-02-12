import bgvideo from "/public/videos/121.mp4"
function Bestseller(){
    let leadd = ["/public/videos/121.mp4","/public/videos/122.mp4","/public/videos/123.mp4","/public/videos/124.mp4","/public/videos/124.mp4"];
    // let liveadd = [
    //     v1 = {
    //         src : "/public/videos/121.mp4",
    //         name : "Hello one"
    //     },
    //     v2 = {
    //         src : "/public/videos/122.mp4",
    //         name : "Hello two"
    //     },
    //     v3 = {
    //         src : "/public/videos/123.mp4",
    //         name : "Hello three"
    //     },
    // ];
    // liveadd.map((add) => (console.log(add.v3.name)));
    return(
        <>
            <div className="">
                <div className="pl-[28px] my-4"><h2>Explore BestSeller</h2></div>
                    <div className="flex pl-[28px] pr-[28px] overflow-x-scroll overflow-scroll">
                            <div className="grid grid-flow-col grid-cols-5 gap-x-5 gap-y-5 pl-[28px] pr-[28px] flex-none">{leadd.map((add) => (
                                <video className="w-[280px] rounded-xl" autoPlay loop><source src={add} type="video/mp4" /></video>
                            ))}
                            </div>
                    </div>
                {/* <div>
                    <div><video className="w-[300px] rounded-xl" autoPlay loop><source src={"/public/videos/121.mp4"} type="video/mp4" /></video></div>
                </div> */}
            </div>
        </>
    )
}

export default Bestseller
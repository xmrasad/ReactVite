import bgvideo from "/public/videos/121.mp4"
function Bestseller(){
    let leadd = ["/public/videos/121.mp4","/public/videos/122.mp4","/public/videos/123.mp4","/public/videos/124.mp4","/public/videos/124.mp4"];
const clip = document.querySelectorAll('#clip');
    for (let i = 0; i<clip.length;i++){
        clip[i].addEventListener('mouseenter',
        function(e){
            clip[i].play()
        })
        clip[i].addEventListener('mouseout',
        function(e){
            clip[i].pause()
        })

    }
    return(
        <>
            <div className=" w-[100%] h-[100%]">
                <div className="pl-[28px] my-4"><h2>Explore BestSeller</h2></div>
                    <div className="flex pl-[28px] pr-[28px] overflow-x-scroll overflow-scroll">
                            <div className="grid grid-flow-col grid-cols-5 gap-x-5 gap-y-5 pl-[28px] pr-[28px] flex-none">{leadd.map((add) => (
                                <video className="w-[280px] rounded-xl" id="clip" autoPlay loop><source id="vclip" src={add} type="video/mp4" /></video>
                            ))}
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Bestseller
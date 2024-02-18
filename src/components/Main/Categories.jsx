function Categories(){
    let catog = ["/images/ic1.png","/images/ic2.png","/images/ic3.png","/images/ic4.png","/images/ic5.png","/images/ic6.png","/images/ic7.webp","/images/ic8.webp","/images/ic9.webp","/images/ic10.png"];
    return(
        <>
            <div className="px-[25px] mt-[22px] mb-[22px]">
                <div>Hello</div>
                <div className="flex flex-row gap-[70px]">{catog.map((item) => (
                    <div>
                        <div><img src={item} alt="" /></div>
                        <div><h2>New product</h2></div>
                    </div>
                ))}</div>
            </div>
        </>
    )
}
export default Categories
function Shipping (){
    let ship = ["/images/warranty.svg","/images/return.svg","/images/gst.svg","/images/freedelivery.svg"];
    return(
        <>
            <div className="flex flex-row justify-center pt-[25px] pb-[25px]">
                {ship.map((item) => (
                    <div>
                        <img className="w-[130px]" src={item} alt="" />
                        <div>
                            <h1>1 Year</h1>
                            <h2>Warranty</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Shipping
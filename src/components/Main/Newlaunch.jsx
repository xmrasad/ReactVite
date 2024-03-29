function Newlaunch() {
  let product = [
    "/images/blackbud.webp",
    "/images/w2bud.webp",
    "/images/blueneck.webp",
    "/images/whitebud.webp",
  ];
  return (
    <>
      <div className="px-[40px] grid grid-flow-col w-full justify-between overflow-scroll">
      {product.map((prod) => (
        <div className="w-[280px] relative">
          <div className="">
            <img className="rounded-t-2xl" src={prod} alt="" />
          </div>
          <div className="flex rounded-b-2xl bg-cyan-100 flex-row">
            <div className="flex flex-col">
              <div>
                <p>Nivara Icon</p>
              </div>
              <div className="flex flex-row">
                <div>
                  <h3>$100</h3>
                </div>
                <div>
                  <h4>$299</h4>
                </div>
                <div>
                  <h4>70% off</h4>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <h4>5star</h4>
                </div>
                <div>
                  <h4>45 sold</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex w-[14px] h-[14px] rounded-full ml-[90px] mt-2 bg-red-600"></div>
                <div className="w-[14px] h-[14px] rounded-full flex mt-2 bg-black"></div>
                <div className="w-[14px] h-[14px] rounded-full flex mt-2 bg-blue-500"></div>{" "}
              </div>
              <div>
                <button className="w-[100px] h-[35px] border-none bg-black text-white ml-5 mt-2 rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-yellow-400 px-2 rounded-lg absolute right-[80px] bottom-[60px] border-solid border-white border-[1px] text-black">
            <h3>23 Days Playback</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
export default Newlaunch;

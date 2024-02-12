function Header(){
  return (
    <>
      <div className="flex w-[100%] h-[80px] justify-between z-[9999] bg-white fixed">
        <div className="flex item-center w-[150px] justify-around"><img className="w-[100px]" src="images/logo.svg" alt="" /></div>
        <div className="flex w-[600px] text-[12px] justify-around items-center">
          <span>Categories</span>
          <span>boAt Personalisation</span>
          <span>Gift with boAt</span>
          <span>Corporate Orders</span>
          <span>More</span>
        </div>
        <div className="flex items-center justify-between">
          <input className="bg-[#e7e5e5] border-[#e7e5e5] border-[1px] h-[32px] w-[200px] rounded-2xl" type="text" placeholder="  Search Here!"/>
        </div>
        <div className=" grid grid-flow-col w-[150px] justify-center items-center">
          <img className="w-8 h-8" src="images/Profile-1.png" alt="" />
          <img className="w-8 h-8" src="images/Profile-1.png" alt="" />
        </div>
      </div>
    </>

    
  )
}

export default Header;
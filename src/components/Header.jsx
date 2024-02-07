function Header(){
  return (
    <>
      <div className="flex align-middle w-[100%] justify-between">
        <div className="mr-8 w-[100px] mt-2 ml-2"><img className=" mt-3" src="images/logo.svg" alt="" /></div>
        <div className="flex w-[600px] text-[12px] justify-around pt-7">
          <span>Categories</span>
          <span>boAt Personalisation</span>
          <span>Gift with boAt</span>
          <span>Corporate Orders</span>
          <span>More</span>
        </div>
        <div className="flex align-middle">
          <input className=" bg-[#e7e5e5] border-[#e7e5e5] border-[1px] h-[32px] w-[200px] mx-6 mt-7 rounded-2xl" type="text" placeholder="  Search Here!"/>
        </div>
        <div className=" grid grid-flow-col pr-8 pt-4 mr-6">
          <img className="w-8 h-8 mr-4 mt-2" src="images/Profile-1.png" alt="" />
          <img className="w-8 h-8 mr-4 mt-2" src="images/Profile-1.png" alt="" />
        </div>
      </div>
    </>

    
  )
}

export default Header;
function Header(){
  return (
    <>
      <div className="flex align-middle justify-between">
        <div className="mr-8"><img src="images/logo.svg" alt="" /></div>
        <div className="flex w-[600px] justify-around pt-4">
          <span>Categories</span>
          <span>boAt Personalisation</span>
          <span>Gift with boAt</span>
          <span>Corporate Orders</span>
          <span>More</span>
        </div>
        <div className="flex pt-5 align-middle">
          <input className="border-black border-[1px] h-[26px] mx-6 rounded-xl" type="text"/>
        </div>
        <div className=" grid grid-flow-col pr-8 pt-4">
          <img className="w-8 h-8" src="images/Profile-1.png" alt="" />
          <img className="w-8 h-8" src="images/Profile-1.png" alt="" />
        </div>
      </div>
    </>

    
  )
}

export default Header;
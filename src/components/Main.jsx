import Overlay from "./Main/Overlay"
import Dailydeals from "./Main/Dailydeals"
import Bestseller from "./Main/Bestseller"
import Dailydealsproduct from "./Main/Dailydealproduct"
import Categories from "./Main/Categories"
import Newlaunch from "./Main/Newlaunch"
import Shipping from "./Main/Shipping"

function Main (){
  return(
    <>
      <Overlay/>
      <Bestseller/>
      <Dailydeals/>
      <Dailydealsproduct/>
      <Categories/>
      <Newlaunch/>
      <Shipping/>
    </>
  )
}
export default Main
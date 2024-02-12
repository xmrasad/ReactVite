import Overlay from "./Main/Overlay"
import Dailydeals from "./Main/Dailydeals"
import Bestseller from "./Main/Bestseller"
import Dailydealsproduct from "./Main/Dailydealproduct"
import Categories from "./Main/Categories"

function Main (){
  return(
    <>
      <Overlay/>
      <Bestseller/>
      <Dailydeals/>
      <Dailydealsproduct/>
      <Categories/>
    </>
  )
}
export default Main
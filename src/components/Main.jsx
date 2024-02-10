import Overlay from "./Main/Overlay"
import Dailydeals from "./Main/Dailydeals"
import Bestseller from "./Main/Bestseller"
import Dailydealsproduct from "./Main/Dailydealproduct"

function Main (){
  return(
    <>
      <Overlay/>
      <Bestseller/>
      <Dailydeals/>
      <Dailydealsproduct/>
    </>
  )
}
export default Main
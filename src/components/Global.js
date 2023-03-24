import "./Global.css";
import Fee from "../asserts/table.png";
import Dates from "../asserts/dates.png";
function Global(){ 
    return( 
        <div className="global">
          <div className="global-text">
           <img src={Dates} alt=""/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIZhg55jblGxJkZ3Lg85wlNTh3QidjwwvbkCUhBWf2A17pEw/viewform">Registration</a>
           </div>
          <img src={Fee} alt=""/>

            </div>
    );
} 

export default Global;
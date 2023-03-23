import "./Global.css";
import Fee from "../asserts/table.png";
import Dates from "../asserts/dates.png";
function Global(){ 
    return( 
        <div className="global">
          <img src={Fee} alt=""/>
          <div className="global-text">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIZhg55jblGxJkZ3Lg85wlNTh3QidjwwvbkCUhBWf2A17pEw/viewform">Registration</a>
           </div>
           <img src={Dates} alt=""/>

            </div>
    );
} 

export default Global;
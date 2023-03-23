import "./Comit.css";
import comit from "../asserts/mtree.png";
import ADVISORY from "../asserts/mcommittee.png";

function Comit(){
    return(
        <div className="committee">
            <img src={comit} alt=""/>
            <img src={ADVISORY} alt=""/>
        </div>
    )
}
 
export default Comit;
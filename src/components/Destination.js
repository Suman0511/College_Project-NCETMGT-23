import logo1 from "../asserts/gitm.jpeg";
import logo2 from "../asserts/gu.jpeg";
import logo3 from "../asserts/g20.jpeg";
import logo4 from "../asserts/logo.png";
import "./destination.css";
import DestinationData from "./DestinationData";


const Destination = ()=>{
    return( 
     <div className="destination"> 
    <DestinationData 
    className="first-des"
    heading="ABOUT GLOBAL INSTITUTE OF TECHNOLOGY AND MANAGEMENT [GITM]"
    text="Global Institute of Technology and Management (GITM), Gurgaon is imparting technical education since 2008. The 
    college is undoubtedly, a preferred choice of budding Engineers where every aspirant gets an equal opportunity to 
    think, wonder, visualize, explore experiment and design his/ her career as per interest and demands of the MNCs. Here, 
    we promote the growth for entrepreneurs, technocrats and engineers who contribute to the services of the society and 
    nation. We, at GITM, are absolutely committed to serve the society and improve the mode of life by imparting high 
    quality education. In the field of Engineering and Management catering to the explicit and implicit needs of the 
    students, society, humanity and Industry, our goal is to continuously improve the healthy learning environment and 
    facilities being provided to the students to achieve academic excellence for employability as world class Technocrats 
    and Managers, apart from making them noble human beings of a nation growing from strength to strength, dispelling 
    the darkness of ignorance and ameliorating the society by means of philanthropic endeavors.
    This institute offers undergraduates courses in B.Tech, BCA, & BBA, and post-graduates in MBA & M.Tech"
    img1={logo1}
    />

<DestinationData 
className="first-des"
    heading="ABOUT GURUGRAM UNIVERSITY"
    text="Gurugram University is a synonym for excellence in education. The students from every nook and corner of the 
    country and from every group and stratum of society live, learn and play in the sprawling lush green; campus, nestled 
    at Sector-51, Gurugram. The University has faculty and other support and service staff, who cater various needs of 
    students and campus that facilitate learning and imbibe the best practices among students Moreover the University, 
    since it's inception provides world class facilities that constantly review and upgrade to reflect the latest trends and 
    developments in higher education. 
    "
    img1={logo2}
    />

<DestinationData 
    className="first-des"
    heading="ABOUT DEPARTMENT"
    text="GITM is the foremost management institute in India. This department offers BBA and MBA in area of Marketing 
    Management, Human Resources Management, Financial Management, Operation and Supply Chain Management, 
    and Business Analytics.
    The department of management is the essence of excellence and design to develop the future managers. Department 
    of management pools a great diversity of students who have the strong desire, confidence, good academic record in 
    era of business and society. Special emphasis is given to their holistic development through a healthy and 
    collaborative learning environment. Teaching pedagogy includes; case studies, presentations, and group discussions 
    are followed by the department to educate students for better understanding management concepts and theories. 
    "
    img1={logo3}
    /> 

<DestinationData 
className="first-des"
    heading="ABOUT CONFERENCE"
    text="The Conference is devoted to deliberate issues and challenges in the field of Commerce and Management. 
    To provide a better platform for expression of their innovative ideas & thoughts among all the participants.
    There will be discussions from the academia-industry experts on various topics, like new education policy, 
    outcome based study, and business plan."
    img1={logo4} 
    />
     </div>   
    );
};

export default Destination;
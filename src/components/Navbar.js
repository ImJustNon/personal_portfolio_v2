import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
            <div className="text-white">
                <Link className="mr-5" to={"/en"}>Home</Link>
                <Link className="mr-5" to={"/en/personal-history"}>Personal-History</Link>
                <Link className="mr-5" to={"/en/certificates"}>Certificates</Link>
                <Link className="mr-5" to={"/en/activities"}>Activities</Link>
                <Link className="mr-5" to={"/en/projects"}>Projects</Link>
                <Link className="mr-5" to={"/en/socials"}>Socials</Link>
            </div>
            <div className="mb-5 text-white">
                <Link className="mr-5" to={"/th"}>หน้าหลัก</Link>
                <Link className="mr-5" to={"/th/personal-history"}>ประวัติส่วนตัว</Link>
                <Link className="mr-5" to={"/th/certificates"}>เกียรติบัตร</Link>
                <Link className="mr-5" to={"/th/activities"}>กิจกรรม</Link>
                <Link className="mr-5" to={"/th/projects"}>โปรเจค</Link>
                <Link className="mr-5" to={"/th/socials"}>โชเชียล</Link>
            </div>
        </>
    );
}


export default Navbar;
import logoIcon from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className=" text-center  my-8">
             <img src={logoIcon} alt="" className="  mx-auto" />
             <p className="my-2 text-lg">Journalism Without Fear or Favour</p>
             <p className="text-lg">{moment().format("dddd, MMMM, D YYYY")}</p>
        </div>
    );
};

export default Header;
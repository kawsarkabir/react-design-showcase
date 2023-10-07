import Header from "../../components/Utilities/Header";
import LeftSideNav from "../../components/Utilities/LeftSideNav";
import Navbar from "../../components/Utilities/Navbar";
import RightSideNav from "../../components/Utilities/RightSideNav";

 

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="font-poppins">this is home </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="lg:col-span-2"><h1 className="text-2xl">news coming soon</h1></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;
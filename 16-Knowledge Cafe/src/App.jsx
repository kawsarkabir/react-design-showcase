import Blogs from "./components/Blogs";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-5 p-10 mt-8">
      <div className="col-span-2">
        <Header></Header>
        <Blogs></Blogs>
      </div>
      <div>
        <h1>BookMarks bars</h1>
      </div>
    </div>
  );
}

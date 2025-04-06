import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBox";
import CategoryMovies from "../../Components/CategoryMovies";

export default function Main({ params }) {

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <SearchBar />
      <CategoryMovies />
    </div>
  );
}

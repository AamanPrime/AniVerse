import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBox";
import CategoryMovies from "../../Components/CategoryMovies";

export default async function Main() {
  


  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <SearchBar />
      <CategoryMovies />
    </div>
  );
}

const Navbar = ({status}) => {
    return (
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">AniVerse</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Watch History</a>
          <a href="#" className="hover:text-gray-400">User</a>
          {/* {
            status ? (<a href="#" className="hover:text-gray-400">SignOut</a>) :
            (<a href="#" className="hover:text-gray-400">SignIn</a>)
            (<a href="#" className="hover:text-gray-400">SignUp</a>)
          } */}
          
          
        </div>
      </nav>
    );
};

export default Navbar;
import React, { useState } from 'react';
import UserList from './UserList';

function App() {

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favourite");

  return (
    <div className="relative flex flex-col m-4">
      <UserList page={page} title={title} />
      <div className="flex m-4 absolute right-0 bottom-0">
        <button className="transform ease-in-out duration-300
        hover:bg-red-600 active:scale-90 hover:scale-95 mt-4 mr-2 px-4 py-2
        bg-red-800 text-white rounded-xl shadow-2xl text-center font-bold"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        <button className="transform ease-in-out duration-300
        hover:bg-red-600 active:scale-90 hover:scale-95 ml-2 mt-4 px-4 py-2
        bg-red-800 text-white rounded-xl shadow-2xl text-center font-bold"
          onClick={() => setTitle("Top performing")}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default App;

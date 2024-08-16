import React from "react";
//mistakes to be noten,h-full of the both outer divs takes the total screen and only one div gets the screen and h-auto same for width.
function Mcard() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
      <div className="w-auto h-auto ">
        <div className=" w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className=" w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">Amazon Basics.</h2>
            <p className="text-xs mt-5">lorem00</p>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto">
        <div className=" w-52 bg-zinc-100  rounded-md overflow-hidden">
          <div className=" w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">Amazon Basics.</h2>
            <p className="text-xs mt-5">lorem500</p>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto">
        <div className=" w-52 bg-zinc-100  rounded-md overflow-hidden">
          <div className=" w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">Amazon Basics.</h2>
            <p className="text-xs mt-5">lorem500</p>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto">
        <div className=" w-52 bg-zinc-100  rounded-md overflow-hidden">
          <div className=" w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">Amazon Basics.</h2>
            <p className="text-xs mt-5">lorem500</p>
          </div>
        </div>
      </div>
    </div>
   
    
    
  );
}

export default Mcard;

import React from "react";

function Mcard() {
  // const data = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
  //     heading: "Amazon Basics",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
  //     heading: "Amazon Basics",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   // Add more items as needed
  // ];

  // return (
  //   <div className="w-full h-screen flex justify-center items-center gap-10">
  //     {data.map((elem, index) => (
  //       <div key={index} className="w-auto h-auto">
  //         <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
  //           <div className="w-full h-32 bg-zinc-300">
  //             <img
  //               className="w-full h-full object-cover"
  //               src={elem.image}
  //               alt={elem.heading}
  //             />
  //           </div>
  //           <div className="w-full px-3 py-4">
  //             <h2 className="font-semibold">{elem.heading}</h2>
  //             <p className="text-xs mt-5">{elem.description}</p>
  //             <button className="px-4 py-2 bg-sky-400 mt-4 text-sm rounded-md">Know more</button>

  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Amazon Basics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instock:false
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
      heading: "Amazon Basics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      instock:  true
    },
    // Add more items as needed
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
      {data.map((elem, index) => (
        <div key={index} className="w-auto h-auto">
          <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt={elem.heading}
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{elem.heading}</h2>
              <p className="text-xs mt-5">{elem.description}</p>
              <button className={`px-4 py-2 ${elem.instock?"bg-sky-400":"bg-red-400"} mt-4 text-sm rounded-md`}>{elem.instock ? "In stock":"out of stock"}</button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mcard;

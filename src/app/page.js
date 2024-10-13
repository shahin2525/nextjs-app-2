import Link from "next/link";
import React from "react";

const Home = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: { revalidate: 5 },
  });
  const shoes = await res.json();
  throw new Error("error form home page");

  return (
    <div>
      <h1>next js home page</h1>
      <div className="grid grid-cols-3 gap-3 p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-secondary">Fashion</div>
                <div className="btn btn-primary">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
        {" "}
        <div className="btn btn-primary">see all</div>
      </Link>
    </div>
  );
};

export default Home;

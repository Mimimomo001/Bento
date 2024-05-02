import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCookButtonClick = (recipe) => {
    if (wantToCook.find((item) => item.id === recipe.id)) {
      showToast("You can select one recipe once!");
      return;
    }

    setWantToCook([...wantToCook, recipe]);
  };

  const handlePreparingButtonClick = (recipe) => {
    const updatedWantToCook = wantToCook.filter((item) => item.id !== recipe.id);
    setWantToCook(updatedWantToCook);

    const updatedCurrentlyCooking = [...currentlyCooking, recipe];
    setCurrentlyCooking(updatedCurrentlyCooking);
  };

  const showToast = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 10000, // 10 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const calculateTotalPreparationTime = (recipes) => {
    return recipes.reduce((total, recipe) => total + recipe.time, 0);
  };

  const calculateTotalCalories = (recipes) => {
    return recipes.reduce((total, recipe) => total + recipe.calories, 0);
  };

  return (
    <div className="container mx-auto mt-10 mb-10 px-4">
      <div className="flex justify-center mt-32">
        <div className="lg:w-[607px] text-center">
          <h1 className="font-bold text-3xl lg:text-4xl pb-[24px] text-black">
            Our Recipes
          </h1>
          <h3 className="font-normal text-base pb-[10px] text-neutral-600">
            Choose from our collection of delicious Asian meals for inspired home-made meals, beautifully crafted.
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-12">
        <section className="w-full md:w-2/3 px-4">
          <div className="flex flex-wrap gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="card w-72 bg-white shadow-xl mb-[30px] border-stone-300 border-[1px] hover:bg-red-50"
              >
                <figure className="px-5 pt-10">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="rounded-xl"
                  />
                </figure>

                <div className="card-body flex-col items-left text-left break-normal">
                  <h2 className="card-title mb-2 text-lg">{recipe.name}</h2>
                  <p className="mb-2 text-sm">{recipe.description}</p>

                  <hr />

                  <h2 className="card-title mb-2 text-lg">Ingredients</h2>
                  <ul className="mb-5 ml-8 text-sm" style={{ listStyleType: "disc" }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>

                  <hr className="mb-10" />

                  <div className="flex gap-16 mb-15">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://www.svgrepo.com/show/521888/time.svg"
                        width="20"
                        alt=""
                      />
                      <h4 className="text-xs">{recipe.time} Minutes</h4>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="https://www.svgrepo.com/show/472613/fire.svg"
                        width="20"
                        alt=""
                      />
                      <h4 className="text-xs">{recipe.calories} Calories</h4>
                    </div>
                  </div>

                  <div className="mt-2">
                    <button 
                      className="btn lg:w-[130px] md:w-[130px] sm:w-[100px] lg:h-[15px] px-[20px] rounded-3xl border-neutral-700 bg-transparent hover:bg-red-800 hover:border-transparent text-black hover:text-white text-[13px] font-bold"
                      onClick={() => handleCookButtonClick(recipe)}>
                      Want to Cook
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="sidebar-table w-72 md:w-1/3 mt-6 md:mt-0 h-[600px] border-[1px] border-neutral-300 rounded-xl py-4 pl-2 hover:bg-red-50 shadow-xl">
          <div className="py-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Want to Cook: <span className="text-red-500 font-semibold">{wantToCook.length} </span></h2>
            <table className="table w-fill">
              <thead>
                <tr>
                  <th className="px-1 py-2"></th>
                  <th className="px-1 py-2">Name</th>
                  <th className="px-1 py-2">Time</th>
                  <th className="px-1 py-2">Calories</th>
                  <th className="px-1 py-2">Preparing</th>
                </tr>
              </thead>
              <tbody>
                {wantToCook.map((recipe, index) => (
                  <tr key={recipe.id}>
                    <td className="py-2 text-xs text-gray-500">{index + 1}</td>
                    <td className="px-1 py-2 text-xs text-gray-500">{recipe.name}</td>
                    <td className="px-1 py-2 text-xs text-gray-500">{recipe.time} minute</td>
                    <td className="px-1 py-2 text-xs text-gray-500">
                      {recipe.calories} calories
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handlePreparingButtonClick(recipe)}
                        className="text-[10px] bg-red-800 text-white px-2 py-1 rounded-3xl"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {currentlyCooking.length > 0 && (
            <div>
              <h1 className="text-lg text-center py-4  font-semibold border-b">
                Currently Cooking:{" "}
                <span className="text-red-500 font-semibold">
                  {currentlyCooking.length}
                </span>
              </h1>
              <div className="overflow-y-auto py-4">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="px-1 py-2"></th>
                      <th className="px-1 py-2">Name</th>
                      <th className="px-1 py-2">Time</th>
                      <th className="px-1 py-2">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentlyCooking.map((item, index) => (
                      <tr key={item.id}>
                        <td className="py-2 text-xs text-gray-500">{index + 1}</td>
                        <td className="px-1 py-2 text-xs text-gray-500">{item.name}</td>
                        <td className="px-1 py-2 text-xs text-gray-500">{item.time} minute</td>
                        <td className="px-1 py-2 text-xs text-gray-500">
                          {item.calories} calories
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex text-sm flex-col  p-4 text-gray-500 gap-3 items-end">
                <p>Total Time: <span className="text-red-600 text-sm">{calculateTotalPreparationTime(currentlyCooking)} minutes</span></p>
                <p>Total Calories: <span className="text-red-600 text-sm">{calculateTotalCalories(currentlyCooking)} calories</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cards;


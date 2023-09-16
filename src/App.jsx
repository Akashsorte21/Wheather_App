import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const getApi = async () => {
      const APIKey = "f4005f951855b7436f85a7cc3dac8296";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APIKey}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    getApi();
  }, [search]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="h-screen flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80"
            alt=""
            className="object-fill h-full w-full"
          />

          <div className="flex flex-col justify-center items-center  sm:absolute  absolute top-[12%] left-[36%] w-[400px] h-[550px] border border-gray-200 shadow-2xl rounded-lg">
            <input
              type="search"
              name=""
              id=""
              value={search}
              placeholder="Place Your City"
              className="py-2 rounded-2xl px-4 bg-transparent border-b-4 outline-none placeholder:text-white
              placeholder:pl-10"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="w-20 mx-auto mt-7">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5164/5164472.png?ga=GA1.1.423463409.1693495777"
                alt=""
              />
            </div>

            {!city ? (
              <p className="mt-3">No Data Found</p>
            ) : (
              <>
                <div className="mt-10 mx-auto flex justify-center items-center">
                  <h1 className="text-4xl font-semibold">
                    <i className="fa-solid fa-map-pin fa-lg mr-3"></i>
                    {search}
                  </h1>
                </div>

                <div className="text-center mt-12 text-3xl mx-auto">
                  <h1>{city.temp}°Cel</h1>
                </div>

                <div className="flex mt-16 justify-center items-center relative gap-5 mx-auto">
                  <p>Min: {city.temp_min}°Cel</p>
                  <div className="absolute left-[50%] h-12 w-[1px] bg-gray-400"></div>
                  <p>Max: {city.temp_max}°Cel</p>
                </div>
              </>
            )}
          </div>
        
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

type GenericArray<T> = Array<T>;

type TUser = {
  name: string;
  age: number;
  hobbies: GenericArray<string>;
};

const UserInfoWithUseState = () => {
  const [user, setUser] = useState<TUser>({
    name: "",
    age: 0,
    hobbies: ["hobby1", "hobby2"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "hobbies") {
      setUser((prevData) => ({
        ...prevData,
        hobbies: value.split(",").map((hobby: string) => hobby.trim()),
      }));
    } else {
      setUser((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    alert(
      `Name:${user.name}; age: ${user.age}, hobbies: ${user.hobbies.toString()}`
    );
  };
  return (
    <div className="mb-10">
      <h1 className="h1 text-center">User Info Object Update of states</h1>
      <div className="grid grid-cols-2 mt-4">
        <div className="border-2 p-4 rounded-lg">
          <h1 className="h1">User Name: {user.name}</h1>
          <h1 className="h1"> age: {user.age}</h1>
          <div className="h1 mt-4">
            {" "}
            hobbies:{" "}
            {user.hobbies.map((item: string, i: number) => {
              return (
                <span key={i} className="m-2 p-2 border-2">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        {/* form */}
        <div className="border-2 p-4 rounded-lg">
          <form action="" onSubmit={userSubmitHandler}>
            <div className="mb-2 grid grid-cols-12 items-center ">
              <label className="col-span-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 p-2 rounded-lg col-span-10"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 grid grid-cols-12 items-center">
              <label className="col-span-2" htmlFor="name">
                Age
              </label>
              <input
                onChange={handleChange}
                name="age"
                type="number"
                id="age"
                className="border-2 p-2 rounded-lg col-span-10"
              />
            </div>
            <div className="mb-2 grid grid-cols-12 items-center">
              <label className="col-span-2" htmlFor="name">
                Hobbies
              </label>
              <div className=" col-span-10">
                <input
                  className="w-full p-2 rounded-lg   border-2"
                  type="text"
                  id="hobbies"
                  name="hobbies"
                  onChange={handleChange}
                />
                <span className="text-error">
                  *write hobbies separated by comma
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <input className="btn btn-success" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfoWithUseState;

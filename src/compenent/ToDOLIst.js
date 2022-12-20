import React, { useState } from "react";

function ToDOLIst() {
  const [activity, setActivity] = useState("");

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  const addActivity = () => {
    // setList ([...list , activity])

    // console.log (list)

    setList((list) => {
      const updateLIst = [...list, activity];

      console.log(updateLIst);
      setActivity("");
      return updateLIst;
    });
  };

  const onDelete = (id) => {
    setList(list.filter((l) => l.id !== list.id));
  };

  return (
    <div className="container">
      <h1
        className="text-center text-uppercase  p-3 text-white-50"
        style={{ backgroundColor: "blue" }}
      >
        To Do APP
      </h1>
      <input
        type="text"
        placeholder="add activity"
        value={activity}
        onChange={handleChange}
        className="w-50"
      />
      <button onClick={addActivity} className=" btn btn-danger m-3">
        Add
      </button>
      <p
        className="p-2 text-white-50 w-50 text-center d-flex justify-content-center"
        style={{ backgroundColor: "grey" }}
      >
        Here is yor activity : {")"}
      </p>
      {list !== [] &&
        list.map((data, i) => {
          return (
            <>
              <p
                className="p-2 text-white-50 w-50 text-center d-flex justify-content-center fs-2"
                style={{ backgroundColor: "#2596be" }}
                key={i.id}
              >
                <div>{data}</div>
                <button onClick={onDelete} className="btn btn-danger m-2">
                  Delete
                </button>
              </p>
            </>
          );
        })}
    </div>
  );
}

export default ToDOLIst;

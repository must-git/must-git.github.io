import { useState } from "react";
import styles from "./style/Practice.module.css";

function Practice() {
  const [car, setCar] = useState({
    year: 2025,
    brand: "Range Rover",
    price: 107900,
  });
  const updateYear = (event) => {
    setCar((c) => ({
      ...c,
      year: event.target.value,
    }));
  };
  const updatebrand = (event) => {
    setCar((c) => ({
      ...c,
      brand: event.target.value,
    }));
  };
  const updatePrice = (event) => {
    setCar((c) => ({
      ...c,
      price: event.target.value,
    }));
  };

  const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

  const addFood = () => {
    const newFood = document.getElementById("foodName").value;
    setFood((f) => [...f, newFood]);
    newFood.value = "";
  };

  const removeFood = (index) => {
    setFood(food.filter((item, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.carDetails}>
        <h2 className={styles.title}>Car Details :</h2>
        <p>
          Brand: <span className={styles.carDetail}>{car.brand}</span>, Year:{" "}
          <span className={styles.carDetail}>{car.year}</span>, Price:{" "}
          <span className={styles.carDetail}>${car.price}.</span>
        </p>
        <input type="number" value={car.year} onChange={updateYear} />
        <input type="text" value={car.brand} onChange={updatebrand} />
        <input type="number" value={car.price} onChange={updatePrice} />
      </div>

      <br />

      <div className={styles.fruitsView}>
        <div className={styles.addFruitForm}>
          <input className={styles.fruitInput} type="text" id="foodName" placeholder="Enter Fruit name" />
          <button onClick={addFood} className={styles.addButton}>
            Add Fruit
          </button>
        </div>
        <h2 className={styles.title}>Fruits View (Click to remove) :</h2>
        <ul>
          {food.map(
            (item, i) =>
              (
                <li
                  className={styles.item}
                  key={i}
                  onClick={() => removeFood(i)}
                >
                  {item}
                </li>
              ) || <p key="">Nothing is Here</p>
          )}
        </ul>
      </div>
    </div>
  );
}

// 1. useEffect(() => {})            //Runs after every re-render
// 2. useEffect(() => {}, [])        //Runs only on mount (the component added to DOM for the 1st time)
// 3. useEffect(() => {}, [value])   //Runs on mount + when value changes
export default Practice;



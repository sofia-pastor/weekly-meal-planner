import { useState } from "react";

export default function MealPlanner() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [meals, setMeals] = useState(
    Object.fromEntries(
      daysOfWeek.map((day) => [day, { lunch: "", dinner: "" }])
    )
  );

  // Atualiza o estado quando o utilizador escreve
  function handleMealInput(event, day, mealType) {
    const newMeals = { ...meals };
    newMeals[day][mealType] = event.target.value;
    setMeals(newMeals);
  }

  function handleSaveMeals() {
    console.log("Saved meals:", meals);
  }

  return (
    <div className="MealPlanner">
      <div className="container">
        <div className="row">
          {daysOfWeek.map((day) => (
            <div className="col day" key={day}>
              <h2>{day}</h2>
              <ul>
                <li>
                  <label>Almoço:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={meals[day].lunch}
                    onChange={(event) => handleMealInput(event, day, "lunch")}
                  />
                </li>
                <li>
                  <label>Jantar:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={meals[day].dinner}
                    onChange={(event) => handleMealInput(event, day, "dinner")}
                  />
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="save-meals">
          <button onClick={handleSaveMeals}>Save Meals</button>
        </div>
      </div>
    </div>
  );
}

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
                  <input type="text" className="form-control" />
                </li>
                <li>
                  <label>Jantar:</label>
                  <input type="text" className="form-control" />
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

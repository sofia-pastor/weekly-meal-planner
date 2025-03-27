import { useState } from "react";
import MealPlanner from "./MealPlanner";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Meal Planner</h1>{" "}
      </header>
      <MealPlanner />
    </div>
  );
}

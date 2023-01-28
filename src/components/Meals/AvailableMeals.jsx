import { DUMMY_MEALS } from "./data.js";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.jsx";
import MealsItem from "./MealsItem.jsx";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealsItem
              id={meal.id}
              name={meal.name}
              des={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

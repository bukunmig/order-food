import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Support Local upcoming talent in your neighborhood. Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by local up and coming chefs! Your support gives them the seed money to open 
        businesses in the community. 
      </p>
    </section>
  );
};

export default MealsSummary;
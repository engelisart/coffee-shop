import coffees from '../../data/coffee.json';

export const CoffeeList = () => {
  return (
    <>
      <ul>
        {coffees.map(coffee => (
          <li key={coffee.id}>
            <img src={coffee.photo} alt="/" />
            <p>
              {coffee.name} - {coffee.price} $
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

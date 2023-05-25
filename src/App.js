import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  //utilizamos el hook useState para crear una variable de estado llamada foodList y una función llamada setFoodList. Y el valor inicial de foodList lo establecemos con los datos importados del archivo foods.json.

  const [foodList, setFoodList] = useState(foods);

  return (
    //código JSX que va a ser renderizado
    <div className="App">
      {/* mapeamos la variable foodList, para poder recorrer cada elemento del array y realizar una acción para cada elemento. Y para cada elemento food en el array foodList se renderizará un elemento <div> con todos sus elementos. */}
      {foodList.map((food, index) => (
        // la propiedad key se establece con este valor que es necesario al renderizar una lista de elementos en React
        <div key={index}>
          <FoodBox
            key={index}
            title={food.name}
            image={food.image}
            calories={food.calories}
            servings={food.servings}
          />
        </div>
      ))}

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;

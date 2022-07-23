# Redux

## Pasos para configurar STORE de REDUX

- Importar y crear un reducer principal
- Configurar un middleware para el trabajo asíncrono
- Configurar la extensión de Redux Devtools

Página de redux:

- https://redux-toolkit.js.org/tutorials/quick-start

- Niveles de carpetas sugerida:
  - redux (carpeta)
    - actions
    - reducers
    - store

Pasos para configurar Redux

1. creamos nuestra store

- store/index.js

```js
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
```

2. importar nuestro proveedor

- El provider, es un high order components que nos ayudará a dar acceso de nuestro store hacia todos los components que lo requieran utilizar. Por ello, se suele usar en la parte más alta de nuestra aplicación.

```js
//  <App />
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

3. Crear el archivo de reducers.

- vamos a crear un index que va a tener todos los reducers que vayamos a utilizar.

- Los reducers son funciones que dirán que acciones ejecutar. Dado a esto, esta función reducer debe de recibir dos parámetros (state, actions)

```js
// results.js
const initialState = {
  isLoading: false,
  data: [],
  errors: {},
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default resultReducer;
```

3. (3.1) Importar el combine

- El método combine, lo que hará es combinar todos los reducers que tengamos a disposición en nuestra aplicación. Este se encontrará en el archivo index.js de la carpeta reducers

```js
import { combineReducers } from "@reduxjs/toolkit";
import resultReducer from "./result";

export default combineReducers({
  results: resultReducer,
});
```

4. Crear nuestras actions

- las acciones son funciones puras (no deben de ejecutar codigo asincrono) que realizarán una acción.

```js
export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_COMPLETE = "FETCH_RECIPES_COMPLETE";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";

const fetchRecipesStart = () => ({
  type: FETCH_RECIPES_START,
});

const fetchRecipesComplete = (payload) => ({
  type: FETCH_RECIPES_COMPLETE,
  payload,
});

const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error,
});
```

- Una acción tiene varias etapas, cuando carga, está completa y cuando existe algún error.

- Las acciones deben de ser llamadas en los reducers.

```js
import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_COMPLETE,
  FETCH_RECIPES_ERROR,
} from "../actions/results";

const initialState = {
  isLoading: false,
  data: [],
  errors: {},
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_START:
      return { ...state, isLoading: true, data: [] };
    case FETCH_RECIPES_COMPLETE:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_RECIPES_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default resultReducer;
```

import App from "../App";
import Character from "../pages/Character/Character";
import Characters from "../pages/Characters/Characters";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
  {path: '/', element: App, index: undefined},
  {path: undefined, element: Home, index: true },
  {path: 'login', element: Login, index: undefined},
  {path: 'characters', element: Characters, index: undefined},
  {path: 'character', element: Character, index: undefined},
  {path: '*', element: NotFound, index: undefined},
]


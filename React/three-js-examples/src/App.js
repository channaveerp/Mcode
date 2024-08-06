import MoveWithCursor from "./components/moveWithCursor.jsx";
import MoveWithScroll from "./components/moveWithScroll.jsx";
import RotatingBox from "./components/rotatingBox.jsx";
import "./App.css";
import MoveWithCursorOne from "./components/moveWithCursorOne.jsx";
import Test from "./components/test.jsx";
import TodoList from "./components/todoWithLocal/index.jsx";
import Counter from "./components/counter/index.jsx";
import WeatherApp from "./components/weather/index.jsx";
import UserTable from "./components/userList/index.jsx";

export default function App() {
  return (
    <div className='App'>
      {/* <RotatingBox /> */}
      {/* <MoveWithCursor /> */}
      {/* <MoveWithScroll /> */}
      {/* <MoveWithCursorOne /> */}
      {/* <Test /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <WeatherApp /> */}
      <UserTable />
    </div>
  );
}

import Avatar from "./components/Avatar";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <TodoList/>
    </section>
  );
}
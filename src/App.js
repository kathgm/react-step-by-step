import Avatar from "./components/Avatar";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import PackingList from "./components/PackingList";
import RenderList from "./components/RenderList";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";


export default function Gallery() {
  return (
    <section>
      <Button/>
      <Toolbar/>
      <h1>Amazing scientists</h1>
      <Profile />
      <TodoList/>
      <PackingList/>
      <RenderList />
    </section>
  );
}
import "./index.css";
import { UserToGroup } from "./components/user-to-group";
import { FilePermissions } from "./components/file-permissions";
import CreateUser from "./components/create-user";
import { GroupPermissions } from "./components/groups-permissions";
import CreateGroup from "./components/create-group";

function App() {
  return (
    <main className="grid grid-cols-3 grid-rows-2 gap-3 justify-center items-center h-screen bg-zinc-600 text-white p-6">
      <UserToGroup />
      <FilePermissions />
      <CreateUser />
      <CreateGroup />
      <GroupPermissions />
    </main>
  );
}

export default App;

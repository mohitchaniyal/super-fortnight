import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { observer } from 'mobx-react-lite';

function AppLayoutComponent() {
  return (
    <>
      <div className="flex h-full">
        <Header />
        <main>
            <Outlet />
        </main>
      </div>
    </>
  );
}

const AppLayout = observer(AppLayoutComponent);

export default AppLayout;

import { MainLayout } from 'components/layouts/MainLayout';
import { createContext, useState } from 'react';
import Header, { Navigation } from 'components/secsions/Header';
import 'styles/style.scss';
import { Router } from 'router/router';

export const MenuContext = createContext({
  view: "/",
  viewHandler: (URL:string) => {}
})

function App() {
  const [view, setView] = useState<string>("/");
  const viewHandler = (URL:string) => setView(prev => URL);

  return (
    <div className="App">
      <MenuContext.Provider value={{view, viewHandler}}>
        <Header/>
        <section>
          <Navigation/>
          <MainLayout>
            <Router URL={view}/>
          </MainLayout>
        </section>
      </MenuContext.Provider>
    </div>
  );
}

export default App;

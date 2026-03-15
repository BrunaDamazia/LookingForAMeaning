import { Button } from './components/Button.jsx';
import { Card } from './components/card.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="grid gap-8 m-8">
          <div className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-6">
            <div className="grid col-span-full gap-2">
              <div>
                <h1 className="text-3xl text-primary-600 font-heading font-bold">
                  Hitchhiker
                </h1>
                <span className="text-sm font-body">/ˈhiCHˌhīkər/ · noun</span>
              </div>
              <p className="text-base font-body">
                A person who travels by getting free rides in passing vehicles.
              </p>
            </div>
            <div className="w-full  flex justify-end">
            <Button/>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;

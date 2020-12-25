import { useEffect } from 'react';

function App() {
  useEffect(() => {
    /* Automatic call this api by google cron task */
    async function doSomething() {
      await fetch('http://localhost:5000/')
    }
    doSomething()
  }, [])
  return (
    <div className="App">
     This is app
    </div>
  );
}

export default App;

import Displayimage from './Displayimage';
import List from './list';

function App() {
  const fruits = [
    { id: 1, name: 'spiderGirl', calories: 95 },
    { id: 2, name: 'BatWoman', calories: 45 },
    { id: 3, name: 'Superman', calories: 105 },
    { id: 4, name: 'AquaMan', calories: 159 },
    { id: 5, name: 'Green LATERN', calories: 37 },
  ];

  return (
    <>
      <Displayimage />
      <List items={fruits} category="fruit" />
    </>
  );
}

export default App;

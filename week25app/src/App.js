import './App.css';
import { Pie } from 'react-chartjs-2';



const state = {
  
  labels: ["Щедрость", "Честность", "Благоразумие", "Спокойствие"],
  datasets: [
    {
      label: 'Распределение положительных качеств Карлсона',
      backgroundColor: [
        '#4d6adf',
        '#dfc24d',
        '#4ddfc2',
        '#dfa992',
      ],
      hoverBackgroundColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
      ],
      data: [30, 30, 80, 81],
      
    }
  ]
}

function App() {
  return (
    <div className="App">
       <h1>Распределение положительных качеств Карлсона</h1>
      < div className="container">
      <Pie
        data={state}
      />
      </div>
    </div>
  );
}

export default App;



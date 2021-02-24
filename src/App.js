import logo from './logo.svg';
import './App.css';

function App() {
  const nayocs = [' joshim / ',' Faruk /',' Razak /',' Eliyes k']
  
  return (
    <div className="App">
      <header className="App-header">
   
      
      <Person name={nayocs[3] + nayocs[1]} job="he is a actor" actress="moushumi"></Person>
      <Person name="Sakib khan //" job="he is the gratest actor" actress="opu bishas"></Person>
      <Person name="Salman shah //" job="he is the Mega star of colochitro" actress="Shabnur"></Person>
      <Person name= "Bapparaj //" job="Cheka khawa person" actress="Cheka"></Person>
      
      
      </header>
    </div>
  );
}
 export default App;
 ///////////

 function Person(props){
   const personStyle= {
    border : "1px solid red", margin: "10px",padding:"10px"
   }
   console.log(props)
   return <div  style = {personStyle}>
   <h1>Nayoc : {props.name}  {props.job}</h1>
   <h2>Actress of : {props.actress} </h2>
   </div>
 }

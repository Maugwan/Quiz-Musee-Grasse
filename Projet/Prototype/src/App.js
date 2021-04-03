import './css/App.css';
import Counter from './posts/Counter'
//import Description from './posts/Description'
import PostData from './data/data.json'
import './css/Selection.css' //Style de Css test pour la question 1 en attendant les ressources finales

function App() {

  var questionsNumber = 0;
  var answersNumber = 0;

  return (
    <div className="App">

      <div className="Container">
      <div className="QuestionText"><h2>{PostData[questionsNumber].question}</h2></div> 
        <div className="QuestionImages"><Counter/></div>

          <div className="Description">
            <div className="DescriptionTitle"><h3>Description :</h3></div>
            <div className="DescriptionContent">{PostData[questionsNumber].answers[answersNumber].description}</div>
          </div>
        <div className="Footer">
          <p className="center">Designed by EPITECH</p>
        </div>
      </div>
    </div>
  );
}

export default App;

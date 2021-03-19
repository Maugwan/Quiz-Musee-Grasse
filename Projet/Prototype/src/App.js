import './App.css';
import PostData from './data/data.json'
import './Selection.css' //Style de Css test pour la question 1 en attendant les ressources finales

function App() {

  var questionsNumber = 0;
  var answersNumber = 0;

  return (
    <div className="App">

      <div className="Container">
      <div className="QuestionText"><h2>{PostData[questionsNumber].question}</h2></div> 

        <div className="QuestionImages">
        <div className="Selection Graines"></div>
          <div className="Selection Fleurs"></div>
          <div className="Selection Boutons"></div>
          <div className="Selection Concretions"></div>
        </div>
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

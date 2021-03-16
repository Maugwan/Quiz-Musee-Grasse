import Question1 from './Question1.png';
import './App.css';
import './Selection.css' //Style de Css test pour la question 1 en attendant les ressources finales

function App() {

  const questions = [     //Le tableau contient les questions(bientot les reponses aussi)
    {
      questionText: '1 Quelle plante utilise-t-on pour parfumer les poudres ?',
    },
    {
      questionText: '2 Test question 2',
    }
  ]
  return (
    <div className="App">

      <div className="Container">

        //Cette div affiche la question selectionné, ici 1, bientot remplacer par une variable
      <div className="QuestionText"> {questions[1].questionText}  </div> 

        <div className="QuestionImages">
        <div className="Selection Graines"></div>
          <div className="Selection Fleurs"></div>
          <div className="Selection Boutons"></div>
          <div className="Selection Concretions"></div>
        </div>
        <div className="Description">

        </div>

        <div className="Footer">
          <p className="center">Designed by EPITECH</p>
        </div>
      </div>
    </div>
  );
}

export default App;

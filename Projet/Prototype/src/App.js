import './App.css';
import './Selection.css' //Style de Css test pour la question 1 en attendant les ressources finales

function App() {

  const questions = [     //Le tableau contient les questions(bientot les reponses aussi)
    {
      id: 1,
      questionText: <h1>1 Quelle plante utilise-t-on pour parfumer les poudres ?</h1>,
    },
    {
      questionText: '2 Test question 2',
    }
  ]

  const description = [
    {
      id: 1,
      descriptionText: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'</p>
    }
  ]

  var questionsNumber = 0;
  
  return (
    <div className="App">

      <div className="Container">
      <div className="QuestionText"> <div className="Question">{questions[questionsNumber].questionText}</div></div> 

        <div className="QuestionImages">
        <div className="Selection Graines"></div>
          <div className="Selection Fleurs"></div>
          <div className="Selection Boutons"></div>
          <div className="Selection Concretions"></div>
        </div>
          <div className="Description"> 
            <div className="DescriptionTitle"><h3>Description :</h3></div>
            <div className="DescriptionContent">{description[0].descriptionText}</div>
          </div>
        <div className="Footer">
          <p className="center">Designed by EPITECH</p>
        </div>
      </div>
    </div>
  );
}

export default App;

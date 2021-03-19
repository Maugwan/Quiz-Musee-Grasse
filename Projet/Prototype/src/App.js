import './App.css';
import './test';
import PostList from './posts/PostList';
import './Selection.css' //Style de Css test pour la question 1 en attendant les ressources finales

function App() {



  var questionsNumber = 1;  
  const text = [{
    "question": "Quelle plante utilise-t-on pour parfumer les poudres?",
    "answers": [
        {
            "description": "La cardamome"
        },
        {
            "description": "L'iris"
        },
        {
            "description": "Le géranium"
        },
        {
            "description": "L'ambre gris"
        }
    ],
    "good_answer": 1
},
{
    "question": "Je suis en albâtre et je servais à créer des poudres colorées? Que suis-je?",
    "answers": [
        {
            "description": "18e-20e dynasties (1580-332 av. J.-C.), Egypte\nInv. 93 568, 02 446"
        },
        {
            "description": "Bichara\n1928, France\nInv. 06 13597"
        },
        {
            "description": "1er-4e s. av. J.-C., Egypte\nInv. 93 577"
        },
        {
            "description": "1er millénaire, Syrie du Nord\nInv. 93 571"
        },
        {
            "description": "19e siècle (2e quart)\nInv.97 391 AB"
        }
    ],
    "good_answer": 0
}]
    // accès à la première reponse, retourne une erreur, a retourner dans <div className="DescriptionContent"></div>
    //{text[questionsNumber].answers[0]}
  return (
    <div className="App">

      <div className="Container">
      <div className="QuestionText">{text[questionsNumber].question}, <PostList/></div> 

        <div className="QuestionImages">
        <div className="Selection Graines"></div>
          <div className="Selection Fleurs"></div>
          <div className="Selection Boutons"></div>
          <div className="Selection Concretions"></div>
        </div>
          <div className="Description"> 
            <div className="DescriptionTitle"><h3>Description :</h3></div>
            <div className="DescriptionContent"></div>
          </div>
        <div className="Footer">
          <p className="center">Designed by EPITECH</p>
        </div>
      </div>
    </div>
  );
}

export default App;

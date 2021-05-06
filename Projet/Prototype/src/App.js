import './css/App.css';
import './images/Questions/1.jpg'
import './images/Questions/2.jpg'
import React, {useState} from "react";
import PostData from './data/data.json'
import Footer from './Component/Footer'
import Rules from './Component/Rules'
import './css/Selection.css'

function App() {
  let [question, setQuestion] = useState(0);
  let [questionCount, setQuestionCount] = useState(1);
  let [description, setDescription] = useState(0);
  let [counter, setCounter] = useState(0);
  let [tryNumber, setTryNumber] = useState(0);
  const questionLenght = PostData.length + 1;
  
      function doubleClick(){
        let goodAnswer = PostData[question].good_answer
        if(questionCount < 14 & question < 13){
              if(goodAnswer !== description & tryNumber < 1) {
                setTryNumber(tryNumber + 1)
                alert("Mauvaise réponse ! encore un essai !")
              }else if(goodAnswer === description){
                setCounter(counter + 1)
                setQuestion(question + 1)
                setQuestionCount(questionCount + 1)
                setTryNumber(tryNumber = 0)
                alert("Bonne réponse !")
              }
              else {
                setQuestion(question + 1)
                setQuestionCount(questionCount + 1)
                setTryNumber(tryNumber = 0)
                alert("Zut !")
              }
            }else{
              alert("Bravo ! Vous avez fini le quiz avec  "+ counter + " bonne réponses !")
            }
      }
      const imagesBackGround = [
        {
          questionBackGroung: 'question ImagesOne',
          answersOne: 'Selection answerOne oneOne',
          answersTwo: 'Selection answerTwo oneTwo',
          answersThree: 'Selection answerThree oneThree',
          answersFour: 'Selection answerFour oneFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesTwo',
          answersOne: 'Selection answerOne twoOne',
          answersTwo: 'Selection answerTwo twoTwo',
          answersThree: 'Selection answerThree twoThree',
          answersFour: 'Selection answerFour twoFour',
          answersFive: 'Selection twoFive answerFive'
        },
        {
          questionBackGroung: 'question ImagesThree',
          answersOne: 'Selection answerOne threeOne',
          answersTwo: 'Selection answerTwo threeTwo',
          answersThree: 'Selection answerThree threeThree',
          answersFour: 'Selection answerFour threeFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesFour',
          answersOne: 'Selection answerOne fourOne',
          answersTwo: 'Selection answerTwo fourTwo',
          answersThree: 'Selection answerThree fourThree',
          answersFour: 'Selection answerFour fourFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesFive',
          answersOne: 'Selection answerOne fiveOne',
          answersTwo: 'Selection answerTwo fiveTwo',
          answersThree: 'Selection answerThree fiveThree',
          answersFour: 'Selection answerFour fiveFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesSix',
          answersOne: 'SIX answerOne sixOne',
          answersTwo: 'SIX answerTwo sixTwo',
          answersThree: 'SIX answerThree sixThree',
          answersFour: 'SIX answerFour sixFour',
          answersFive: 'SIX answerFour sixFour'
        },
        {
          questionBackGroung: 'question ImagesSeven',
          answersOne: 'Selection answerOne sevenOne',
          answersTwo: 'Selection answerTwo sevenTwo',
          answersThree: 'Selection answerThree sevenThree',
          answersFour: 'Selection answerFour sevenFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesHeight',
          answersOne: 'Selection answerOne heightOne',
          answersTwo: 'Selection answerTwo heightTwo',
          answersThree: 'Selection answerThree heightThree',
          answersFour: 'Selection answerFour heightFour',
          answersFive: 'Selection answerFive heightFive'
        },
        {
          questionBackGroung: 'question ImagesNine',
          answersOne: 'Selection answerOne nineOne',
          answersTwo: 'Selection answerTwo nineTwo',
          answersThree: 'Selection answerThree nineThree',
          answersFour: 'Selection answerFour nineFour',
          answersFive: 'Selection answerFive nineFive'
        },
        {
          questionBackGroung: 'question ImagesTen',
          answersOne: 'Selection answerOne tenOne',
          answersTwo: 'Selection answerTwo tenTwo',
          answersThree: 'Selection answerThree tenThree',
          answersFour: 'Selection answerFour tenFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesEleven',
          answersOne: 'Selection answerOne elevenOne',
          answersTwo: 'Selection answerTwo elevenTwo',
          answersThree: 'Selection answerThree elevenThree',
          answersFour: 'Selection answerFour elevenFour',
          answersFive: ''
        },
        {
          questionBackGroung: 'question ImagesTwelve',
          answersOne: 'Selection answerOne twelveOne',
          answersTwo: 'Selection answerTwo twelveTwo',
          answersThree: 'Selection answerThree twelveThree',
          answersFour: 'Selection answerFour twelveFour',
          answersFive: 'Selection answerFive twelveFive'
        },
        {
          questionBackGroung: 'question ImagesThirteen',
          answersOne: 'Selection answerOne thirteenOne',
          answersTwo: 'Selection answerTwo thirteenTwo',
          answersThree: 'Selection answerThree thirteenThree',
          answersFour: 'Selection answerFour thirteenFour',
          answersFive: ''
        },
        {
        questionBackGroung: 'question ImagesFourTeen',
        answersOne: 'Selection answerOne thirteenOne',
        answersTwo: 'Selection answerTwo thirteenTwo',
        answersThree: 'Selection answerThree thirteenThree',
        answersFour: 'Selection answerFour thirteenFour',
        answersFive: ''
        },
      ]

  return (
    <div className="App">
      <div className="Container">
      <div className="QuestionText"><h2><span>{questionCount}</span>/{questionLenght - 1}  {PostData[question].question}</h2></div> 
        <div className={imagesBackGround[question].questionBackGroung}>
                <a href="https://www.museesdegrasse.com/"><div className="Site">Retour au site</div></a>
                <div className={imagesBackGround[question].answersOne} onMouseEnter={() => setDescription(description = 0)} onClick={doubleClick} title="Popover title" data-content="Popover body content is set in this attribute." ></div>
                <div className={imagesBackGround[question].answersTwo} onMouseEnter={() => setDescription(description = 1)} onClick={doubleClick}></div>
                <div className={imagesBackGround[question].answersThree} onMouseEnter={() => setDescription(description = 2)} onClick={doubleClick}></div>
                <div className={imagesBackGround[question].answersFour} onMouseEnter={() => setDescription(description = 3)} onClick={doubleClick}></div>
                <div className={imagesBackGround[question].answersFive} onMouseEnter={() => setDescription(description = 4)} onClick={doubleClick}></div>
        </div>
        <div className="Description">
            <Rules/>
            <div className="DescriptionTitle"><h3>Description :</h3></div>
            <div className="DescriptionContent">{PostData[question].answers[description].description}</div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

//import "./App.css";
import React from "react";

//define the mock data

const courses = [
  {
    id: 0,
    name: 'Full Stack Developement Program',
    price: '89,999'

  },
  {
    id: 1,
    name: 'Python Automation Testing Program',
    price: '64,999'
  },
  {
    id: 2,
    name: 'UI/UX Program',
    price: '89,999'
  }
]
var BatteryList = []

// ===== ENGLISH ======
BatteryList.push({index: 10, 
	name:'H-10-23-9755', 
	list: [	'Screening',
			'Consent Form',
			'Intake Form',
			'Questionnaire',
			'Questionnaire',
			'Questionnaire'
		],
	//list: ['Intake Form'],
	description: 'Test',
	ParameterLists: [	'BriefScreening',
						'ConsentForm_uOttawa_Steffener',
						'IntakeForm_EN',
						'STAI_S_001',
						
						'STAI_S_001',
						'BDI_001',
						],
	//ParameterLists: ['EN_IntakeForm_FaCE'],
	Instructions: [	'',
					'',
					'Default',					
					'',
					'',
					''
					],
	//Instructions: ['Default'],
	BatteryInstructions: '<p class="Instructions">Welcome to the University of Ottawa\'s Neural Cognitive Mapping Laboratory - <b>Cognitive Evaluation</b>',
	ButtonName: [
		'Screening',
		'Consent',
		'STAI-T',
		'Intake',
		'BDI/GDS',
		'STAI-S',
	],
	Language:'EN',
	RunAudioTest: true,
	Footer: '©NCMLab 2023'
})


function App(props) {

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
    const arrayDataItems = courses.map(course => 
      <li key={course.id}>
        <p>{course.name}</p>
        <span>{course.price}</span>
      </li>
    )

    const arrayBattery = BatteryList.map(item =>
      <div>
      <h1>List of tasks for the {item.name} Battery</h1>
      <h2>Battery id: {item.index}</h2>
      <li key={item.name}>
        <h2>Script Names</h2>  
        <ol>{item.list.map(task => <li>{task}</li>)}</ol>
      </li>
      <li>
      <h2>Parameters</h2>  
        <ol>{item.ParameterLists.map(params => <li>{params}</li>)}</ol>
      </li>
      <li>
      <h2>Task Names</h2>  
        <ol>{item.ButtonName.map(button => <li>{button}</li>)}</ol>
      </li>
      </div>
      )


  return (
    <div>
    
    <div className="container">
    
      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayBattery}</ul>
    </div>
    </div>
  );
}

export default App;
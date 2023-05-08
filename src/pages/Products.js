import { Fragment, useEffect, useState } from 'react';
import CourseCard from '../components/Course'
// import coursesData from '../data/coursesData';


export default function Courses(){ 
	
	// Checks to see if the mock data was captured
		// console.log(coursesData);
		// console.log(coursesData[0]);

	// the "course" in the CourseCard component is called a "prop" which is a shorthand for "property" since components are considered as objects in reactJS
	// the curly braces ({}) are used for props to signify that we are providing information using JavaScript expressions rather hard coded values 
	// We can pass information from one component to another using props. This is referred to as props drilling 

	const [ courses, setCourses ] = useState([])

	useEffect(() => {

	fetch(`${process.env.REACT_APP_API_URL}/products/all`)
	.then(res => res.json())
	.then(data => {
	    
	    console.log(data);

	    // Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" components
	    setCourses(data.map(course => {
	        return (
	            <CourseCard key={course._id} courseProp={course}/>
	        );
	    }));

	});

}, []);


	return(
		<Fragment>
			{courses}
		</Fragment>
		)
}


import Card from './Card'
import { useState } from 'react';

 function Cards(props){
     const courses=props.courses;
     let category=props.category;
     const [likedCourses, setLikedCourses] = useState([]);
    // console.log(courses);
    function getCourses(){
        if(category==='All'){
            let allCourses=[];
            Object.values(courses).forEach((courseType)=>{
            courseType.forEach((course)=>{
                allCourses.push(course);
            })
        })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    // console.log(getCourses());
    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course)=>
            (
                <Card key={course.id} course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}></Card>
            ))
            }
        </div>
    )
}
export default Cards;
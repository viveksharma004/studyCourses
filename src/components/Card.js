import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

function Card(props){
    const course=props.course;
    const likedCourses=props.likedCourses;
    const setLikedCourses=props.setLikedCourses;
    function likeHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length===0){

                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    // console.log(props);
    // console.log(course);
    return (
        <div className="dark:bg-stone-700 w-[300px] rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt="courseImage"></img>
                <div className="absolute w-[35px] h-[35px] bg-white rounded-full right-2 bottom-[-12px] grid place-items-center" >
                <button onClick={likeHandler}>{
                    likedCourses.includes(course.id)?
                    (<FcLike fontSize="1.5rem"></FcLike>):
                    (<FcLikePlaceholder fontSize="1.5rem"></FcLikePlaceholder>)
                }
                    </button>
                </div>
            </div>

            <div className="p-2">
                <p className="text-white font-semibold text-xl leading-6">{course.title}</p>
                <p className="mt-2 text-white opacity-90">{
                (course.description.length >100) ? (course.description.substr(0,100)+"...") :(course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card;


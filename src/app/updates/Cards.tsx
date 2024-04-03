import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props:any) => {
    console.log(props.category);//Array[0]
    console.log(props.data);//true

    let category = props.category;
    // const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    function getCourses() {
        if (category === "All") {
            let allCourses:any = [];
            Object.values(props.data).forEach((array:any) => {
                array.forEach((courseData:any) => {
                    allCourses.push(courseData);
                });
            });
            console.log(allCourses)
            return allCourses;
        }
        else
        {
            console.log(props.data[category]);
            return props.data[category];
        }
    }

    //   console.log(getCourses());
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course:any) => {
                    return (<Card course={course} key={props.data.id}  />);
                })
            }
        </div>
    );
};

export default Cards;

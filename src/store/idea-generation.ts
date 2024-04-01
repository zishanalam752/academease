import {create} from "zustand"


interface GenerationState{
    isLoading:boolean,
    isAuth:boolean,
    user: object,
      setuser:(user:object)=>void;
    setIsLoading:(isLoading:boolean)=>void,
}
// const data=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")||""):"";
// console.log(data)
const {name,rollno,branch,subsection,section} =JSON.parse(localStorage.getItem("token")||'{}')|| {}
export const useGenerationStore=create<GenerationState>()((set)=>({
    
    isLoading:false,
    isAuth    :false ,  //if there's no token in local storage then it returns false else true
   user:{},
    setuser:(user:object)=>set({user}),
    setIsLoading:(isLoading:boolean) => set({isLoading}),
    
}))
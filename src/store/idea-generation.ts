import { create } from "zustand"


interface GenerationState {
    isLoading: boolean,
    isAuth: boolean,
    user: any,
    setuser: (user: object) => void;
    setIsAuth: (isAuth: boolean) => void;
    setIsLoading: (isLoading: boolean) => void,
}
// const data=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")||""):"";
// console.log(data)
// const { name, rollno, branch, subsection, section } = JSON.parse(localStorage.getItem("token") || '{}') || {}
export const useGenerationStore = create<GenerationState>()((set) => ({

    isLoading: false,
    isAuth: false,  //if there's no token in local storage then it returns false else true
    user: "",
    setIsAuth: (value) => set({ isAuth: value}),
    setuser: (user: object) => set({ user }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),

}))
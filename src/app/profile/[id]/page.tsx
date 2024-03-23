export default function UserProfile(name:any) {
    console.log("params",name)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page 
            <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{name}</span>
            </p>

            </div>
    )
}
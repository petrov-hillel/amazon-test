import {generateAccountsProfilesAndCampaigns} from "../utils/generateData";
import {Link} from "react-router-dom";

export default function Home() {
    const data = generateAccountsProfilesAndCampaigns(40,20,30)

    return (
        <div className={"w-screen h-screen flex flex-col items-center justify-center"}>
            <h1 className="text-white mb-2 text-8xl">Hello</h1>
            <h2 className="w-[300px] mx-auto text-center text-white mb-6 text-xl">This application was created as a statement of work</h2>
            <Link to={'/accounts'} state={{ data }} className="btn">Generate Tables</Link>
        </div>
    )
}
import { Button } from "@nextui-org/button";
import Accordions from "@/components/UI/Accordion/page";
import Dropdowns from "@/components/UI/Dropdown/page";

const App = () => {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="w-[80vw] mt-3 flex flex-row justify-evenly items-center">
                <Button className="mt-2">Press me</Button>
                <Dropdowns />
            </div>
            <Accordions />
        </main>
    )
}

export default App

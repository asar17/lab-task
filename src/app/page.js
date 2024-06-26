
import { Options }from "../components/index";
import CostTable from '../components/costTable'

// import "react-day-picker/lib/style.css";
// import "./styles.css";

export default function Home() {


  return (
    <main className="max-sm:p-2 md:p-10 md:py-16 lg:p-10 xl:p-15 flex flex-col gap-2  h-auto ">
          <Options option={["كل","مخصص","weekday","weekend"]}/>
          <CostTable/>
    </main>
        
  )
}
  


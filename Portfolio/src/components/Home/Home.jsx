import Section from "../Section/Section";
import { Third } from "../ThirdPage/Third";
export default function Home(){
    return <div data-scroll-section="0,5" className=" locomotive-scroll">
        <Section/>
        <Third/>
    </div>;
}
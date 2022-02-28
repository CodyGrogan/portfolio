import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home(props: any){

    Aos.init();

    return(
        
        <div>

        <div data-aos="fade-up">
            Hello World
        </div>

        <div data-aos="fade-down">
            Hello World again
        </div>


</div>



)}

export default Home;
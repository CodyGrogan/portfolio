import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home(props: any){

    Aos.init();

    return(
        
        <div>

        <section className='portfolioSection color1'>

        <div data-aos="fade-up">
            Hello World
        </div>

        </section>


        <section className='portfolioSection color2'>


        <div data-aos="fade-down">
            Hello World again
        </div>
        </section>

</div>



)}

export default Home;
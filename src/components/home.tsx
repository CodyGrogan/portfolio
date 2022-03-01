import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Intro';
import IntroParticle from './particle';


function Home(props: any){

   
    Aos.init();

    return(
        
        <div className='homeContainer'>
        <section className='portfolioSection color1'>
            


            <div data-aos="fade-up fade-out">
                Eyecatching intro here
                <IntroParticle/>
            </div>

            <div>
                <Intro/>
            </div>


        </section>


        <section className='portfolioSection color2'>
        
        <div className='sectionHead'>
        <h2>Skills</h2>
        </div>

            <div data-aos="fade-down">

                Icons that you can hoverover with animations

            </div>
        </section>


        <section className='portfolioSection color1'>
        <h2>Portofolio</h2>

            <div data-aos="fade-up">

                Fancy introduction to my portfolio projects
            </div>

        </section>


    <section className='portfolioSection color2'>
        <h2>About Me</h2>

    <div data-aos="fade-down">
        Education, nontraditional background, Chinese skills
    </div>
    </section>

    <section className='portfolioSection color1'>
        <h2>Contact</h2>

            <div data-aos="fade-up">

                My linked in, email me, yadada
            </div>

    </section>


</div>



)}

export default Home;
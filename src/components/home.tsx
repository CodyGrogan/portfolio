import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Intro';
import IntroParticle from './particle';


function Home(props: any){

   
    Aos.init();

    return(
        
        <div className='homeContainer'>
        <section className='portfolioSectionStart color1'>
            


            <div data-aos="fade-up fade-out">
                <IntroParticle/>
            </div>

            <div>
                <Intro/>
            </div>


        </section>


        <section className='portfolioSection color2'>
        
            <div className='sectionHead '>
            <h2>Skills</h2>
            </div>

        <div className='skillContainer'>

        <div className='lineBreak'/>
            <div className='skillGroup ' data-aos="fade-left">
            <h3>Front End</h3>   
                <div className='skillInnerGroup'>
                
                       
                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/logo192.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/html5.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/css.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/javascript.png'></img>
                </div>

                </div>

             
            </div>


            <div className='skillGroup' data-aos="fade-right">
            <h3>Back End</h3>  

                <div className='skillInnerGroup'>

                                 
                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/node.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/Expressjs.png'></img>
                </div>

                </div>

            </div>
            <div className='skillGroup' data-aos="fade-left">
            
            <h3>Misc</h3>    
                <div className='skillInnerGroup'>
              
                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/mongo.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/github.png'></img>
                </div>



                </div>

            </div>
            </div>

        </section>


        <section className='portfolioSection color1'>
        <h2>Portofolio</h2>

        <div className='lineBreak'/>


            <div data-aos="fade-up">

                Fancy introduction to my portfolio projects
            </div>

            <div className='skillGroup' data-aos="fade-left">
            
            <h3>Misc</h3>    
                <div className='skillInnerGroup'>
              
                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/mongo.png'></img>
                </div>

                <div className='skillContainer'>
                <img className='aboutIcon' src='./img/github.png'></img>
                </div>



                </div>

            </div>

            <div className='skillDrawer'>
            <div className='skillBubble'>
            <img className='aboutIcon' src='./img/github.png'></img>
            </div>

            Github




            </div>

            <div className='skillDrawer'>
                github
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
        <div className='lineBreak'/>


            <div data-aos="fade-up">

                My linked in, email me, yadada
            </div>

    </section>


</div>



)}

export default Home;
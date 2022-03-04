import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home(props: any){

   
    Aos.init();

    return(
        
        <div className='home'>



        
          <div className="container-fluid bg-light  bg-gradient">
            <div className='row'>

            <div className='col photoDiv'>
              photo here
            </div>

            <div className='col'>
            <h1 >Cody Grogan</h1>
            <p >Full Stack Web Developer</p>

            <p>


            </p>

            </div>
          
            
            <div className='col contactBtn'>
              <div>
          
            <button className="btn btn-outline-success" type="submit">Contact Me</button>
            </div>

            </div>
            <div className='col'>
            <div >
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="material-icons">
                  language
                  </span>
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">中文</a></li>
                </ul>
              </div>

              </div>
              </div>
          </div>
     
          <div className='homeElement'>

          Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsuLorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est m dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est 
          </div>
                
        <div className='homeElement'>
          <h2>
            Portfolio
          </h2>



        </div>

      

        <div className='homeElement'>

          Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsuLorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est m dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est 
        </div>


        <div className='homeElement'>

          Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsuLorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est m dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est 
        </div>


        </div>



)}

export default Home;
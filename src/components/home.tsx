import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Home(props: any){

   
    Aos.init();
   
   useEffect(()=>{

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  // @ts-ignore
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
  
  
   },
   [])


    return(
        
        <div className='home'>



        
          <div className="container-fluid bg-light  bg-gradient">
            <div className='row'>

            <div className='col photoDiv'>
              <img className='profilePhoto' src='./img/codyphotocircle.png'/>
              <div>
       <a href='https://www.linkedin.com/in/cody-grogan-096288127/'><img className='aboutIcon linkedIn' src='./img/LI-In-crop.png'></img></a> 
        </div>
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

          <div className='projectContainer'>
            <div className='projectHead'>

              <h3>
                Digital Travel Guide Taipei
              </h3>

              <div className='container'>
                <div className='row'>
                  <div className='col-sm'>

                  <div className='aboutCon'>
        
                      <img className='aboutIcon' src={'./img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
                      <img className='aboutIcon' src={'/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
                      <img className='aboutIcon' src={'/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
                      <img className='aboutIcon' src={'./img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
                      <img className='aboutIcon' src={'./img/mongo.png'} data-bs-toggle="tooltip" data-placement="top" title="MongoDB"/>
                      <img className='aboutIcon' src={'./img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
                      <img className='aboutIcon' src={'./img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>

                  </div>
                      This webapp takes user preferences from a short quiz, weather data from Open Weather Map API, and location data to recommend an itinerary for a vacation in Taipei.
                  
                  
                      <div className='aboutCon'>

                      <a href='https://digitaltravelguide.herokuapp.com/' target='_blank'><button className='btn btn-success demoBtn'>Live Demo</button></a>
                      <a href='https://github.com/CodyGrogan/digitaltravelguide' target='_blank'> <button className='btn btn-outline-success demoBtn'>View Code</button></a>
                      
                      
                      </div>
                      <div className='form-text'>
                      Demo may take a few seconds to load due to Heroku free tier limitations.
                      </div>
                  
                  </div>

                  <div className='col-sm'>
                  <img src='./img/image_128.png'/>
                  </div> 
                </div>
              </div>

            </div>
            
          </div>


        </div>

        <div data-aos='fade-left' className='homeElement'>

          <div className='projectContainer'>
            <div className='projectHead'>

              <h3>
                Cram School Manager
              </h3>

              <div className='container'>
                <div className='row'>
                  <div className='col-sm'>

                  <div className='aboutCon'>
        
                      <img className='aboutIcon' src={'./img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
                      <img className='aboutIcon' src={'/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
                      <img className='aboutIcon' src={'/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
                      <img className='aboutIcon' src={'./img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
                      <img className='aboutIcon' src={'./img/mongo.png'} data-bs-toggle="tooltip" data-placement="top" title="MongoDB"/>
                      <img className='aboutIcon' src={'./img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
                      <img className='aboutIcon' src={'./img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>

                  </div>
                    Play madlibs created by other users, and create and share your own madlib templates with other users.
                  </div>

                  <div className='col-sm'>
                  <img src='./img/image_128.png'/>
                  </div> 
                </div>
              </div>

            </div>
            
          </div>


        </div>


        <div data-aos='fade-left' className='homeElement'>

<div className='projectContainer'>
  <div className='projectHead'>

    <h3>
      Madlib Warehouse
    </h3>

    <div className='container'>
      <div className='row'>
        <div className='col-sm'>

        <div className='aboutCon'>

            <img className='aboutIcon' src={'./img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
            <img className='aboutIcon' src={'/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
            <img className='aboutIcon' src={'/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
            <img className='aboutIcon' src={'./img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
            <img className='aboutIcon' src={'./img/mongo.png'} data-bs-toggle="tooltip" data-placement="top" title="MongoDB"/>
            <img className='aboutIcon' src={'./img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
            <img className='aboutIcon' src={'./img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>

        </div>
          Play madlibs created by other users, and create and share your own madlib templates with other users.
          
          <div className='aboutCon'>

            <a href='https://madlibwarehouse.herokuapp.com/' target='_blank'><button className='btn btn-success demoBtn'>Live Demo</button></a>
            <a href='https://github.com/CodyGrogan/madlibwarehouse' target='_blank'> <button className='btn btn-outline-success demoBtn'>View Code</button></a>
          </div>
          <div className='form-text'>
              Demo may take a few seconds to load due to Heroku free tier limitations.
          </div>
          
        </div>

        <div className='col-sm'>
        <img src='./img/image_128.png'/>
        </div> 
      </div>
    </div>

  </div>
  
</div>


</div>


        <div className='homeElement' data-aos='fade-right'>
          <h3>
            Contact
          </h3>
          Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsuLorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est m dolorem est Lorem ipsum dolorem est Lorem ipsum dolorem est 
        
        <div>
        <span className="material-icons-outlined">
          email
          </span>
        </div>
        

        <div>
       <a href='https://www.linkedin.com/in/cody-grogan-096288127/'><img className='aboutIcon linkedIn' src='./img/LI-In-crop.png'></img></a> 
        </div>
        
        </div>

</div>



)}

export default Home;
import Aos from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Chinese(props: any){

   
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
              <img className='profilePhoto' src='/portfolio/img/headshot.png'/>

        <div className='aboutCon'>
              <div>
       <a href='https://www.linkedin.com/in/cody-grogan-096288127/' target='_blank'><img className='aboutIcon linkedIn' src='/portfolio/img/LI-In-crop.png'></img></a> 
        </div>
        <div>
       <a href='https://github.com/CodyGrogan' target='_blank'><img className='aboutIcon gitHub' src='/portfolio/img/github.png'></img></a> 
        </div>
        </div>
      </div>

            
           

            <div className='col'>

              <div className='push-down'>
            <h1 >Cody Grogan</h1>
            <p >程序設計師</p>

            <p>


            </p>

            </div>

            </div>
          
            
            <div className='col '>
              <div className='push-down'>
          
           <a href='#contact'><button className="btn btn-outline-success contactBtn">聯絡</button></a> 
            </div>

            </div>
            <div className='col'>
            <div className='push-down'>
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="material-icons language">
                  language
                  </span>
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link to='/'><li><a className="dropdown-item" href="#">English</a></li></Link>
                    <Link to='/zh/'> <li><a className="dropdown-item" href="#">中文</a></li></Link>
                </ul>
              </div>

              </div>
              </div>
          </div>




      <div className='container content'>
     
          <div className='homeElement aboutMe'>

          嗨，我是Cody，一個Full Stack 程序設計師。 程式設計是我的愛好已經兩年多了，希望我能成為專業的網路程序設計師。 我有使用JavaScript和Typescript構建Web應用程序前端和後端的經驗。 我的中文程度流利，因爲曾經在台灣讀中國歷史研究所。 雖然我受過非傳統教育，但我相信我的作品集證明了我的能力和技能。
          </div>
                
        <div className='homeElement'>
          <h2>
            作品集
          </h2>



        </div>

      

        <div className='homeElement'>

          <div className='projectContainer'>
            <div className='projectHead'>

              <h3>
                電子旅遊指南：臺北
              </h3>

              <div className='container'>
                <div className='row'>
                  <div className='col-sm'>

                  <div className='aboutCon'>
        
                      <img className='aboutIcon' src={'/portfolio/img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
                      <img className='aboutIcon' src={'/portfolio/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
                      <img className='aboutIcon' src={'/portfolio/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
                      <img className='aboutIcon' src={'/portfolio/img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
                      <img className='aboutIcon' src={'/portfolio/img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
                      <img className='aboutIcon' src={'/portfolio/img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>

                  </div>
                  這個webapp從一個簡短的問答中獲取用戶偏好、  Open Weather Map API 的資料、 與位置數據來安排去臺北度假的行程.
                  
                  
                      <div className='aboutCon'>

                      <a href='https://digitaltravelguide.herokuapp.com/' target='_blank'><button className='btn btn-success demoBtn'>Live Demo</button></a>
                      <a href='https://github.com/CodyGrogan/digitaltravelguide' target='_blank'> <button className='btn btn-outline-success demoBtn'>View Code</button></a>
                      
                      
                      </div>
                      <div className='form-text'>
                      因爲Heroku的免費等級的限制，實驗網站會需要幾秒準備。
                      </div>
                  
                  </div>

                  <div className='col-sm'>

                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={"/portfolio/img/dgt/dgt1.png"} className="d-block w-100 carImg" alt="dgt1"/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/dgt/dgt2.png"} className="d-block w-100 carImg" alt="dgt2"/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/dgt/dgt3.png"} className="d-block w-100 carImg" alt="dgt3"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>




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

                    補習班管理助手
              </h3>

              <div className='container'>
                <div className='row'>
                  <div className='col-sm'>

                  <div className='aboutCon'>
        
                      <img className='aboutIcon' src={'/portfolio/img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
                      <img className='aboutIcon' src={'/portfolio/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
                      <img className='aboutIcon' src={'/portfolio/img/typescript.png'} data-bs-toggle="tooltip" data-placement="top" title="Typescript"/>

                      <img className='aboutIcon' src={'/portfolio/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
                      <img className='aboutIcon' src={'/portfolio/img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
                      <img className='aboutIcon' src={'/portfolio/img/mongo.png'} data-bs-toggle="tooltip" data-placement="top" title="MongoDB"/>
                      <img className='aboutIcon' src={'/portfolio/img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
                      <img className='aboutIcon' src={'/portfolio/img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>
                      <img className='aboutIcon' src={'/portfolio/img/Firebase.png'} data-bs-toggle="tooltip" data-placement="top" title="Firebase Auth"/>
                    
                  </div>


                  一個基本的學校管理助手，您可以在其中組織課程、功課、課程計畫、學生出勤率和成績，以及營運學校所需的其他功能。 課堂和功課的數據也透過各種圖表顯示，以實體化課堂和學生的表現。
                  
                    <div className='aboutCon'>

                      <a href='https://cram-school-manager.herokuapp.com/' target='_blank'><button className='btn btn-success demoBtn'>Live Demo</button></a>
                      <a href='https://github.com/CodyGrogan/cramschoolmanager' target='_blank'> <button className='btn btn-outline-success demoBtn'>View Code</button></a>
                    </div>
                    <div className='form-text'>
                    因爲Heroku的免費等級的限制，實驗網站會需要幾秒準備。
                    </div>
                  
                  </div>

                  <div className='col-sm'>
                  <div id="carouselCram" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselCram" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselCram" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselCram" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={"/portfolio/img/cram/cram1-f.png"} className="d-block w-100 carImg" alt="dgt1"/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/cram/cram2-f.png"} className="d-block w-100 carImg" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/cram/cram3-f.png"} className="d-block w-100 carImg" alt="..."/>
                          </div>
                         
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCram" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselCram" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                  </div> 
                </div>
              </div>

            </div>
            
          </div>


        </div>


        <div data-aos='fade-right' className='homeElement'>

<div className='projectContainer'>
  <div className='projectHead'>

    <h3>
        madlib遊戲站
    </h3>

    <div className='container'>
      <div className='row'>
        <div className='col-sm'>

        <div className='aboutCon'>

            <img className='aboutIcon' src={'/portfolio/img/html5.png'} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" />
            <img className='aboutIcon' src={'/portfolio/img/css.png'} data-bs-toggle="tooltip" data-placement="top" title="CSS" />
            <img className='aboutIcon' src={'/portfolio/img/javascript.png'} data-bs-toggle="tooltip" data-placement="top" title="JavaScript"/>
            <img className='aboutIcon' src={'/portfolio/img/logo192.png'} data-bs-toggle="tooltip" data-placement="top" title="React.js"/>
            <img className='aboutIcon' src={'/portfolio/img/mongo.png'} data-bs-toggle="tooltip" data-placement="top" title="MongoDB"/>
            <img className='aboutIcon' src={'/portfolio/img/node.png'} data-bs-toggle="tooltip" data-placement="top" title="Node.js"/>
            <img className='aboutIcon' src={'/portfolio/img/expressjs.png'} data-bs-toggle="tooltip" data-placement="top" title="express.js"/>
            <img className='aboutIcon' src={'/portfolio/img/Firebase.png'} data-bs-toggle="tooltip" data-placement="top" title="Firebase Auth"/>

        </div>


        播放其他用戶創建的madlib，並與其他用戶創建和共享自己的madlib範本。
          
          <div className='aboutCon'>

            <a href='https://madlibwarehouse.herokuapp.com/' target='_blank'><button className='btn btn-success demoBtn'>Live Demo</button></a>
            <a href='https://github.com/CodyGrogan/madlibwarehouse' target='_blank'> <button className='btn btn-outline-success demoBtn'>View Code</button></a>
          </div>
          <div className='form-text'>
            因爲Heroku的免費等級的限制，實驗網站會需要幾秒準備。
          </div>
          
        </div>

        <div className='col-sm'>
        <div id="carouselMadlib" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselMadlib" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselMadlib" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselMadlib" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselMadlib" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={"/portfolio/img/mad/mad1-f.png"} className="d-block w-100 carImg" alt="dgt1"/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/mad/mad2-f.png"} className="d-block w-100 carImg" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/mad/mad3-f.png"} className="d-block w-100 carImg" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src={"/portfolio/img/mad/mad4-f.png"} className="d-block w-100 carImg" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMadlib" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMadlib" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
        </div> 
      </div>
    </div>

  </div>
  
</div>


</div>

          <div className='homeElement' data-aos='fade-left'>
          <h3>教育</h3>
          威廉瑪麗大學, 2013-2017, BA, Cum Laude
          <br/>
          國立臺灣大學文學院語文中心中國語文組, 2017-2018
          <br/>
          The Odin Project, 2021-現在


          </div>


        <div id='contact' className='homeElement' data-aos='fade-right'>
          <h3>
            聯絡
          </h3>

          請使用下面的email、LinkedIn、還是 Github聯絡我。
          <br/>
          <span className="material-icons-outlined">
          email
        </span>
          

        <div>
        
        <a href = "mailto: codygrogan.hire@gmail.com"> 
          codygrogan.hire@gmail.com
          
        </a>
       
        </div>
        


        <div className='aboutCon'>
        <div>
       <a href='https://www.linkedin.com/in/cody-grogan-096288127/' target='_blank'><img className='aboutIcon linkedIn' src='/portfolio/img/LI-In-crop.png'></img></a> 
        </div>
        
        <div>
       <a href='https://github.com/CodyGrogan' target='_blank'><img className='aboutIcon gitHub' src='/portfolio/img/github.png'></img></a> 
        </div>
        </div>

        </div>


  </div>


</div>



)}

export default Chinese;
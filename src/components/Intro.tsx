import TypewriterComponent from "typewriter-effect";

function Intro(props: any){

 

    return(
        <div>
            <TypewriterComponent

              

            onInit={(typewriter) => {
                typewriter.typeString(`<h2> <i> Hi, I'm <strong>Cody</strong>! </i></h2>`)
                  .pauseFor(2000).typeString(` <br></br> I'm a fullstack web developer`).start();
              }}
            />


        </div>
    )
}

export default Intro;
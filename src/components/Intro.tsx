import TypewriterComponent from "typewriter-effect";

function Intro(props: any){

 

    return(
        <div className='typeWriter'>
            <TypewriterComponent

              

            onInit={(typewriter) => {
                typewriter.start().typeString(` <i > Hi, I'm <strong>Cody</strong>! </i> <br/> I'm a full stack developer`)
                  ;
              }}
            />


        </div>
    )
}

export default Intro;
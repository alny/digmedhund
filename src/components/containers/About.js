import React, { Component } from 'react'

class About extends Component {
  render(){
    return(
      <div className="container-fluid no-left-padding no-right-padding content-block about-section">

      				<div className="container">
      					<div className="about-detail">
      						<div className="col-md-5 col-sm-6  about-img">
      							<img src="assets/images/me.jpg" alt="About Us"/>
      						</div>
      						<div className="col-md-7 col-sm-6 about-content">
      							<h3>Hvem er jeg</h3>
      							<h5>Uddannet jurist og parat til at udleve en stor drøm om at blive selvstændig hundelufter</h5>

      								<p>Jeg har en stor passion for dyr! Så enkelt er det. Jeg sætter stor pris på at gå lange ture med hunde og observere deres sprog og ”læse” de signaler, som de sender.</p>
                    <br/>
      							<p>Jeg er i gang med en hundetræner- og hundeadfærdsbehandleruddannelsen hos
                        Turid Rugas, som er en international anerkendt hundeadfærdstræner og kendt for
                        brug af dæmpende signaler overfor hunde. Dæmpende signaler er de mindre og
                        finere tegn, som en hund bruger for at forhindre at konflikter opstår. Når en hund
                        bruger dæmpende signaler kan man sige, at ”den taler med mindre bogstaver i
                        modsætning til store bogstaver”. Når man kan aflæse en hunds dæmpende signaler,
                        får man redskaber til at forstå hvad en hund vil kommunikere til sin omverden. Det
                        giver mig en stor glæde at være sammen med hunde og se hvordan de interagerer
                        og ”taler sammen”.
                    </p>
      						</div>
      					</div>
      				</div>
      			</div>
    )
  }
}

export default About

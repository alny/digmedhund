import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'


class Home extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
    if(this.props.allWork.all != null){
      return
    }
    this.props.fetchWorkPost()
  }
  render(){
    return(<div className="main-container">
		<main className="site-main">

			<div className="container-fluid no-left-padding no-right-padding content-block">

				<div className="container">

					<div className="row">

						<div className="col-md-8 col-sm-7 col-xs-12 content-area content-area-space no-left-padding no-right-padding">
							<div className="blog-onecolumn col-xs-12">

								<div className="type-post">

									<div className="entry-cover">
										<a href="#"><img src="assets/images/blog-post-1.jpg"/></a>
										<div className="entry-meta"><a href="#" title="Lifestyle">Hundeluftning</a></div>
									</div>

									<div style={{width: '94.4%'}} className="entry-content">
										<h3 className="entry-title">Velkommen til DigMedHund</h3>

										<p>Friske og nysgerrige hunde søges! Er din hund træt af at kede sig derhjemme?
                      <br/> Jeg tilbyder kompetent hundeluftning- og træning alle ugens hverdage. <br/><br/>
                       Din hund får masser af motion og leg sammen med andre hunde (”hundeskovbørnehave”).
                      <br/> Jeg passer den også gerne, når du er på ferie. Du er altid velkommen til at ringe til min gratis hotline, hvis du har spørgsmål om din hund eller hunde generelt.</p>

                      <br/>
                      <h3 className="entry-title">Gratis hotline</h3>

  										<p>Hvis du har konkrete spørgsmål om din egen hund eller generelle spørgsmål om hundeadfærd eller lignende så er min gratis hotline åben mandag, tirsdag og torsdag mellem kl. 16.00 og 17.</p>
                      <br/>
                      <h3 className="entry-title">Min baggrund</h3>

                        <p>Jeg har en stor passion for dyr! Så enkelt er det. Jeg er 53 år, uddannet jurist og ønsker efter mange års arbejde
                        inden for mit fag at forfølge en drøm om at blive selvstændig hundepasser og –træner. Jeg er mor til 3 store børn
                        og bor sammen med min mand i Skovshoved. <br/> <br/>

                        Jeg sætter stor pris på at gå lange ture med hunde og observere deres sprog og læse de signaler, som de sender.
                        Jeg er i gang med en hundetræner- og hundeadfærdsuddannelse hos Turid Rugas, som er en international
                        anerkendt hundeadfærdstræner og kendt for bestseller hundebogen om brug af dæmpende signaler.
                        </p>

                        <br/>
                        <h3 className="entry-title">Værdi</h3>

                        <p>Jeg tager altid udgangspunkt i den enkelte hund og tilpasser turene og træningen efter, hvor din hund er i sin
                        udvikling og hvilken race evt. blandingsrace den tilhører. Det interesserer mig, at hunde kan blive ved med at
                        lære hele livet. <br/><br/>

                        Jeg synes en hund skal kende spillereglerne for at være sammen med andre mennesker og hunde. Den skal
                        samtidig have det sjovt, lære nye ting og få stimuleret sin nysgerrighed ved brug af alle sine sanser. En
                        forudsætning for at en hund kan være velfungerende i samspillet med mennesker og andre hunde, er at den føler
                        sig tryg og rolig. <br/> <br/>

                        I min omgang med hunde bruger jeg alene positiv belønning. Jeg går ikke ind for straf. Det betyder, at din hund
                        alene får opmærksomhed for ønsket adfærd, mens jeg ignorerer hvis din hund gør noget forkert. Jeg forsøger
                        også at undgå, at din hund bliver bragt i situationer, hvor den udviser uønsket adfærd. Dette kan gøres ved at
                        forudse situationer, som kan udløse denne adfærd. Hvis din hund f.eks. løber efter cykler eller løbere skal jeg
                        sørge for, at den har sin opmærksomhed på noget andet på turen. Positiv belønning er en af byggestenene til en
                        harmonisk familiehund.
                        </p>

              <div className="read-more">
											<Link to={'/hundeluftning'} title="Read More">Læs mere</Link>
										</div>
									</div>
								</div>

							</div>



						</div>

						<div className="col-md-4 col-sm-5 col-xs-12 widget-area widget-space">

							<aside className="widget widget_aboutme">
								<div className="aboutme-box">
									<img src="assets/images/wid-aboutme.jpg" alt="About" />
									<div className="aboutme-content">
										<p>Jeg er 53 år, uddannet jurist og parat til at udleve en stor drøm om at blive selvstændig hundelufter og –træner. Jeg er mor til 3 store børn og bor sammen med min mand i Skovshoved.</p>
										<a href="#" title="About Me">Om Mig</a>
									</div>
								</div>
							</aside>






						</div>

					</div>

					<div className="row gallery-list">
						<div className="col-sm-4 col-xs-6 gallery-box branding">
							<a href="assets/images/portfolio-3-col-1.jpg">
								<img src="assets/images/portfolio-3-col-1.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box photography">
							<a href="assets/images/portfolio-3-col-2.jpg">
								<img src="assets/images/portfolio-3-col-2.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box webdesign">
							<a href="assets/images/portfolio-3-col-3.jpg">
								<img src="assets/images/portfolio-3-col-3.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box graphics">
							<a href="assets/images/portfolio-3-col-2.jpg">
								<img src="assets/images/gallery1.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box branding">
							<a href="assets/images/portfolio-3-col-3.jpg">
								<img src="assets/images/gallery2.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box photography">
							<a href="assets/images/portfolio-3-col-1.jpg">
								<img src="assets/images/gallery3.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box webdesign">
							<a href="assets/images/portfolio-3-col-3.jpg">
								<img src="assets/images/gallery4.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box graphics">
							<a href="assets/images/portfolio-3-col-2.jpg">
								<img src="assets/images/gallery5.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
						<div className="col-sm-4 col-xs-6 gallery-box graphics">
							<a href="assets/images/portfolio-3-col-1.jpg">
								<img src="assets/images/gallery7.jpg" alt="Gallery"/>
								<div className="gallery-detail">
									<h4>Hundeluftning</h4>
									<span>Hund</span>
								</div>
							</a>
						</div>
					</div>
					<div className="clearfix"></div>

				</div>

			</div>


		</main>
	</div>

    )
  }
}

const stateToProps = (state) => {
  return {
    allWork: state.work
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchWorkPost: (params) => dispatch(actions.fetchWorkPost(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Home)

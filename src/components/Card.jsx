import htmllogo from "../assets/img/logo_html.png"
import csslogo from "../assets/img/logo_brush.png"
import brushlogo from "../assets/img/logo_css.png"




const Card = () => {
  return (
  <div>
      <section class="logo">
            <div class="box">
                <img src={htmllogo} alt="html_logo"/>
                <h3>HTML5 Markup</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box">
                <img src={csslogo} alt="css_logo"/>
                <h3>CSS3 Styling</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box">
                <img src= {brushlogo} alt="graphic_logo"/>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
        </section>
  </div>
  );
};

export default Card;

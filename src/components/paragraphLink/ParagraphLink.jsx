// Connecting stylesheet
import '../../styles/paragraphLink/paragraph-link.css';
import PropTypes from 'prop-types'


//  Los props comunican los componentes padres con los componentes hijos
const ParagraphLink = ({ href, color = 'orange', children }) => { // props --> {clave: valor, href: "http"}
  // consolelog(props)

  const myParagraph = (<>
    <a
      className="color-anchor"
      id="anchor-paragraph"
      style={{ textDecoration: 'none', color: color }}
      href={href}
      target="_blank">
      <p className="content">{children}</p>
    </a>
  </>
  );
  return myParagraph
}

ParagraphLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default ParagraphLink; // exportacion por default

/*
* Deestructuracion
*
* const [] = [23, 45, 67];
* const {varC, varD:varG} = {varC, varF, varG}*/

const ParagraphLink = ({ href, color, children }) => { // props --> {clave: valor, href: "http"}
  // consolelog(props)

  const myParagraph = (<>
    <a
      style={{ textDecoration: 'none', color: color }}
      href={href}
      target="_blank">
      <p>{children}</p>
    </a>
  </>
  );
  return myParagraph
}

export default ParagraphLink;

/*
* Deestructuracion
*
* const [] = [23, 45, 67];
* const {varC, varD:varG} = {varC, varF, varG}*/

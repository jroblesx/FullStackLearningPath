import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../shared/title';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    }
});

export default function Introduction() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Introducción a HTML 5</Title>
            <Typography component="p">
                HTML 5 (HyperText Markup Language, versión 5) es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML.
                El mismo es la base para crear interfaces gráficas y disponer elementos visuales en nuestros desarrollos.
      </Typography>
            <br />
            <Typography component="p">
                En la siguiente sección del nivel vamos a conocer HTML5 desde sus bases hasta temas avanzados como la api de Geolocalización,
                el contenido esta organizado de manera tal que logrés encontrar toda la documentación necesaria y ejemplos prácticos de uso.
                se recomienda la siguiente <a href="https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar">introducción</a> la cual cubre los temas:
                <ul>
                    <li>Que es HTML</li>
                    <li>Anatomía de un elemento HTML (¿que partes los componen?)</li>
                    <li>Elementos anidados (un elemento dentro de otro)</li>
                    <li>Elementos de bloque y elementos de línea</li>
                    <li>Elementos vaciós (elementos sin etiqueta de cierre)</li>
                    <li><strong>Atributos</strong></li>
                    <li><strong>Anatomia de un documento HTML</strong></li>
                    <li>Comentarios en HTML</li>
                </ul>
            </Typography>
            <br />

            <Title>ejemplo de documento HTML</Title>
            <AceEditor
  placeholder="Placeholder Text"
  mode="html"
  theme="monokai"
  name="blah2"
  fontSize={14}
  width="100%"
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`<!DOCTYPE html>
<html lang="es">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Página de ejemplo</title>
        meta
    </head>
    <body>
        body
    </body>
</html>`}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
  <br />
            <Typography component="p">
                Happy codding &#128540; !!!
      </Typography>

        </React.Fragment>
    );
}
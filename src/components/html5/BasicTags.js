import React from 'react';
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

export default function BasicTags() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Etiquetas Básicas de HTML 5</Title>
            <Typography component="p">
                HTML se basa en principalmente en etiquetas, que son como instrucciones para dar formato a las diferentes partes de una página web.
                Por ejemplo, mediante el uso de las etiquetas HTML puedes subrayar textos, ponerlos en negrita, establecer encabezados,
                estructurar el texto en guiones, en párrafos, añadir imágenes y vínculos a otras páginas, etc.
      </Typography>
            <br />
            <Typography component="p">
                En el <a href="https://www.lawebera.es/xhtml-css/conceptos-basicos-html.php#etiquetas-basicas-de-html">siguiente enlace</a> se puede conseguir una descripción mas detallada de las principales etiquetas que debes conocer antes de comenzar, las cuales resumo a continuación:
                <ul>
                    <li><strong>html</strong>: indica el comienzo y fin del documento HTML.</li>
                    <li><strong>head</strong>: indica que empieza la cabecera de la página.
                        En ella se suele poner el título (<strong>title</strong>) de la web,
                        una descripción y otras informaciones relacionadas con el contenido de la página.</li>
                    <li><strong>body</strong>: es el cuerpo de la página, donde va lo que se ve en el navegador al cargar una web. 
                    En el body van los textos, las imágenes y todos los contenidos de la web.</li>
                    <li><strong>h1, h2, h3, h4, h5</strong>: son los títulos o encabezados. 
                    Se utilizan para establecer determinados textos de la página como titulares, suelen tener un tamaño de 
                    fuente mayor para diferenciarlos del resto del texto. Son importantes en el posicionamiento en buscadores.</li>
                    <li><strong>a</strong>: define los enlaces a otros documentos o direcciones web.</li>
                    <li><strong>table</strong>: se utiliza para mostrar tablas en nuestra pagina web en conjunto con las etiquetas
                    <strong> thead, tbody, tr, th y td</strong>.</li>
                    <li><strong>p</strong>: el texto dentro de esta etiqueta forma un párrafo.</li>
                    <li><strong>img</strong>: se utiliza para mostrar imágenes</li>
                    <li><strong>ul, ol</strong>: <strong>ul</strong> se utiliza para mostrar listas desordenadas, mientras que <strong>ol</strong> se utiliza para mostrar listas ordenadas, ambas se utilizan en conjunto a la etiqueta <strong>li</strong>.</li>
                    <li><strong>b, strong</strong>: se utiliza para resaltar del texto (negrita).</li>
                    <li><strong>u</strong>: se utiliza para resaltar mostrar texto subrayado.</li>
                    <li><strong>i, em</strong>: se utiliza para mostrar texto en cursiva.</li>
                    <li><strong>script</strong>: se utiliza para introducir scripts (generalmente en lenguaje javascript) o importar archivos de script externos.</li>
                    <li><strong>style</strong>: se utiliza para introducir estilo css.</li>
                    <li><strong>link</strong>: se utiliza para enlazar o introducir contenido externo como documentos css o fuentes externas para nuestro texto.</li>
                </ul>
            </Typography>
            <br />

            <Title>Ejemplo de documento HTML</Title>
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
        <h1>Texto de ejemplo</h1>
        <h2>Texto de ejemplo</h2>
        <h3>Texto de ejemplo</h3>
        <h4>Texto de ejemplo</h4>
        <h5>Texto de ejemplo</h5>
        <a href="www.google.com">Este es un enlace a google</a>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad<th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jhon Wick (en realidad es <a href="https://es.wikipedia.org/wiki/Keanu_Reeves">Keanu Reeves</a>)</td>
                    <td>56</td>
                </tr>
            </tbody>
        </table>
        <p>Este es un texto <strong>html</strong> de ejemplo</p>
        <img src="https://www.eluniversal.com.mx/sites/default/files/2020/09/02/keanu_reeves_john_wick.jpg" alt="Este tambien es keanu" />
        <h2>Lista ordenada</h2>
        <ol>
            <li>Primer elemento</li>
            <li>Segundo elemento</li>
        </ol>
        <h2>Lista desordenada</h2>
        <ul>
            <li>Primer elemento</li>
            <li>Segundo elemento</li>
        </ul>
    </body>
</html>`}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
                <Typography variant="p">
                    <br />
                    <Title>Revisa esto tambien ;)</Title>
                    De igual forma te dejo la <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento">referencia de mozilla</a> donde podrás encontrar muchas mas etiquetas para estudiar 
                </Typography>
        </React.Fragment>
    );
}
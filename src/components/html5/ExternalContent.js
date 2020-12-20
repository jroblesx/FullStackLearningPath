import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../shared/title';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    }
});

export default function ExternalContent() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Contenido incrustado o contenido externo</Title>
            <Typography component="p">
                Además de los contenidos multimedia habituales, HTML puede incluir otra variedad de contenidos, aunque no siempre es fácil de interactuar con ellos.
                El contenido incrustado hace referencia a contenido ajeno que necesitamos que se muestre dentro nuestro sitio o aplicación.
      </Typography>
            <br />
            <Typography component="p">
                Para una mejor comprensión de este tipo de etiquetas visita la <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento">referencia de mozilla </a>
                en la sección de elementos de seccionamiento, sin embargo recomiendo hacer énfasis en la siguiente etiqueta:
                <ul>
                    <li>iframe</li>
                </ul>
                Un ejemplo práctico de uso de iframes bastante común es mostrar un
                video de youtube en nuestra aplicación asi como lo ves a continuación. <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K3xtWk9VJ5s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />
                Si quieres divertirte con ello ve a youtube, busca un video que te guste y sigue estos 3 pasos:
                <ol>
                    <li>Haz click en compartir</li>
                    <li>Haz click en incorporar</li>
                    <li>Copia el código que genera youtube para ti y pegalo en tu aplicación</li>
                </ol>
                <br />
                listo!!! ya tendrás tu video incrustado haciendo uso de iframes.
            </Typography>
        </React.Fragment>
    );
}
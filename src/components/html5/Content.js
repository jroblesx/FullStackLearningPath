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

export default function Content() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Contenido del texto</Title>
            <Typography component="p">
            Utiliza los elementos HTML de contenido del texto para organizar bloques o 
            secciones de contenido colocados entre los tags de apertura <strong>body</strong> y cierre.
            Es importante para la accessibility y el SEO, que estos elementos se identifiquen 
            con el objetivo o la estructura de ese contenido.
      </Typography>
            <br />
            <Typography component="p">
                Para una mejor comprensión de este tipo de etiquetas visita la <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento">referencia de mozilla </a> 
                en la sección de elementos de seccionamiento, sin embargo recomiendo hacer énfasis en las siguientes etiquetas:
                <ul>
                    <li>div</li>
                    <li>ul</li>
                    <li>ol</li>
                    <li>li</li>
                    <li>hr</li>
                </ul>
                Es importante destacar que la etiqueta <strong>div</strong> jugará un papel muy importante en un futuro ya se que utiliza muchisimo
                , de hecho es una de las mas utilizadas en aplicaciones web y su uso es bastante sencillo.
            </Typography>
        </React.Fragment>
    );
}
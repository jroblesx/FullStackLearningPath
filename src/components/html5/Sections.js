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

export default function Sections() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Introducción a HTML 5</Title>
            <Typography component="p">
            Los elementos de seccionamiento del contenido te permiten organizar los contenidos del documento en partes lógicas. 
            Usa los elementos de seccionado para crear una descripción amplia de los contenidos de tu página, 
            incluyendo el encabezado y pie de página y elementos para identificar secciones.
      </Typography>
            <br />
            <Typography component="p">
                Para una mejor comprensión de este tipo de etiquetas visita la <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento">referencia de mozilla </a> 
                en la sección de elementos de seccionamiento, sin embargo recomiendo hacer énfasis en las siguientes etiquetas:
                <ul>
                    <li>article</li>
                    <li>aside</li>
                    <li>footer</li>
                    <li>header</li>
                    <li>nav</li>
                    <li>main</li>
                    <li>section</li>
                </ul>
            </Typography>
        </React.Fragment>
    );
}
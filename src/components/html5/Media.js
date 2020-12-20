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

export default function Media() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Imágenes y contenido multimedia</Title>
            <Typography component="p">
            El mas de una ocasión habrás visto sitios que incluyen imagenes o contenido multimedia como videos o audio. 
            Para ello se recomienda conocer al menos las siguientes etiquetas:
      </Typography>
            <br />
            <Typography component="p">
                <ul>
                    <li><a href="https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">img</a></li>
                    <li><a href="https://www.w3schools.com/html/html5_audio.asp">audio</a></li>
                    <li><a href="https://www.w3schools.com/html/html5_video.asp">video</a></li>
                </ul>
            </Typography>
        </React.Fragment>
    );
}
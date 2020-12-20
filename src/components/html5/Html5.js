import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../shared/title';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Introduction from './Introduction';
import BasicTags from './BasicTags';
import Sections from './Sections';
import Content from './Content';
import Media from './Media';
import ExternalContent from './ExternalContent';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fullHeight: {
    height: "100%",
    paddingTop: theme.spacing(3),
    backgroundColor: "#fff",
    position: "fixed",
    overflowY:"auto"
  },
  content:{
    position: "fixed",
    left: "38.5%",
    overflowY: "auto",
    maxHeight: "calc(100vh - 100px)"
  }
}));

function getSteps() {
  return [
    'Introducción a HTML5', 
    'Etiquetas básicas de HTML', 
    'Seccionamiento del contenido',
    'Contenido del texto',
    'Imágenes y multimedia',
    'Contenido incrustado'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Introduction />;
    case 1:
      return <BasicTags />;
    case 2:
      return <Sections />;
    case 3:
      return <Content />;
    case 4:
      return <Media />
    case 5:
      return <ExternalContent />
    default:
      return 'Unknown step';
  }
}

export default function Html5() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={4} className={classes.fullHeight}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                  <StepContent>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Anterior
                  </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reiniciar unidad
          </Button>
              </Paper>
            )}
          </Grid>
          <Grid item xs={8} className={classes.content}>
            {getStepContent(activeStep)}
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}
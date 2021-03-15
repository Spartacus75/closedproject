import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {

  const {open, handleClose, data} = props

  //const [open, setOpen] = React.useState(false);

  return (
    <div>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {data.name} - {data.wtg}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <br/>
          Le budget PM 'G4' est de : {data.pm_bud_G4}<br/>
          Le budget PM 'built' est de : {data.pm_bud_built}<br/>
          Deviation PM: {Math.round(1000*(data.pm_bud_G4-data.pm_bud_built)/(data.pm_bud_G4))/10} %
          <br/>
          Le budget LOG 'G4' est de : {data.log_bud_G4}<br/>
          Le budget LOG 'built' est de : {data.log_bud_built}<br/>
          Deviation LOG: {Math.round(1000*(data.log_bud_G4-data.log_bud_built)/(data.log_bud_G4))/10} %
          <br/>
          PM + LOG 'G4':{data.pm_bud_G4+data.log_bud_G4}<br/>
          PM + LOG 'built': {data.pm_bud_built+data.log_bud_built}<br/>
          Deviaton: {Math.round(1000*(data.pm_bud_G4+data.log_bud_G4-data.pm_bud_built-data.log_bud_built)/(data.pm_bud_G4+data.log_bud_G4))/10} %<br/>

PREALABLE: METTRE EN PLACE UNE AUTHENTIFICATION!!!!
Scope
Table: COST PM /LOG / CM vs Gate 4 FC
Indicate the cost Breakdown
Other Revenue
Other relevant information



          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

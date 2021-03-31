import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 200,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style, donnee} = props;


  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}` + ' - ' } />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {
  const classes = useStyles();
  const {data} = props;//my addition

  console.log('list', data)

  return (
    <div className={classes.root}>
      <FixedSizeList height={200} width={300} itemSize={40} itemCount={100}
                    itemData={{data}}>
        {renderRow}

      </FixedSizeList>
    </div>
  );
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

export const Searchbar = (props) => {

    const useStyles = makeStyles({
        root: {
            width: '50vw'
        },
        cssLabel: {
            color: 'red'
        },
    })

    const classes = useStyles();

    return (
        <>
        <TextField
          id="filled-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Search..."
          margin="normal"
        //   value={props.value}
          onChange={props.onChange}
          InputLabelProps={{
            shrink: true,
            style: {
                color: 'white',
                borderColor: 'green'
            }
          }}
          InputProps={{style: {color: 'white', borderColor: 'white'}}}
          variant="filled"
        />
        </>
    )
}

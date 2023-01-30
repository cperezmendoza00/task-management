import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
    Grid,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { states as defaultStates } from '../utils/data';


const useStyles = makeStyles({
    formControl: {
        //padding: 80,
    },
    fields: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'left',
    },
});

export default function Task() {
    const classes = useStyles();
    const SELECT_DEFAULT = 'Select...'

    useEffect(() => {
        const taskState = localStorage.getItem('tasks')

        if (taskState) {
            try {
                const tasksJson = JSON.parse(taskState)
                console.log(tasksJson)
                if (tasksJson.length) {
                    seTasks(tasksJson)
                }
            } catch (e) {

            }
        }

    }, [])

    //Fields
    const [name, setName] = useState('')
    const [state, setState] = useState(SELECT_DEFAULT)
    const [deadline, setDeadline] = useState('')

    const [tasks, seTasks] = useState([])


    const [nameError, setNameError] = useState(false)
    const [stateError, setStateError] = useState(false)
    const [deadlineError, setDeadlineError] = useState(false)



    const [states, setStates] = useState(defaultStates)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value)
    }

    const handleStateChange = (event) => {
        setState(event.target.value)
    }

    const handleOnSave = () => {
        let error = false
        if (name.trim() === '') {
            setNameError(true)
            error = true
        } else {
            setNameError(false)
        }
        if (deadline.trim() === '') {
            setDeadlineError(true)
            error = true
        } else {
            setDeadlineError(false)
        }
        if (state === SELECT_DEFAULT) {
            setStateError(true)
            error = true
        } else {
            setStateError(false)
        }

        if (!error) {
            console.log(tasks)
            tasks.push({
                id: uuidv4(),
                name,
                state,
                deadline,
            })
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }

    }

    return (
        <Grid container>
            <Grid item>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        data-testid='test-name-field'
                        error={nameError}
                        className={classes.fields}
                        id="outlined-basic"
                        value={name}
                        label="Name"
                        variant="outlined"
                        onChange={handleNameChange}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                        data-testid='test-deadline-field'
                        error={deadlineError}
                        className={classes.fields}
                        id="outlined-basic"
                        value={deadline}
                        label="Deadline"
                        variant="outlined"
                        onChange={handleDeadlineChange}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        data-testid='test-state-field'
                        error={stateError}
                        className={classes.fields}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="State"
                        onChange={handleStateChange}
                    >
                        <MenuItem value={SELECT_DEFAULT}>Select...</MenuItem>
                        {defaultStates.map((state, i) =>
                            <MenuItem key={`state_${i}`} value={state.code}>{state.name}</MenuItem>
                        )}

                    </Select>
                </FormControl>

                <Button
                    data-testid='task-button-save'
                    variant='outlined'
                    onClick={handleOnSave}>
                    Save
                </Button>
            </Grid>

        </Grid>

    )
}
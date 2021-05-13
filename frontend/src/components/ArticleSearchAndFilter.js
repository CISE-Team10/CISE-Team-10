import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ArticleTable from './ArticleTable'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const methodologieNames = [
    'TDD or Test Driven Development',
];

const claimNames = [
    'Improve code quality',
    'Improve app quality',
    'Improve teamwork',
    'Confidence satisfaction'
];

const strengthNames = [
    'Strongly support',
    'Support',
    'Disagree',
    'Strongly disagree'
];

function getStyles(name, methodologies, theme) {
    return {
        fontWeight:
            methodologies.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function updateDisplay(method, claim, strenght, articles) {
    var listOfResult = [];
    var listOfMethod = [];
    var listOfClaim = [];
    var listOfStrenght = [];

    if (method.length !== 0) {

        method.forEach(item => { listOfMethod.push(articles.filter(one => one.software_engineering_methodology.toLowerCase() === item.toLowerCase())) })

    }
    if (claim.length !== 0) {
        claim.forEach(item => { listOfClaim.push(articles.filter(one => one.claim.toLowerCase() === item.toLowerCase())) })
    }
    if (strenght.length !== 0) {
        strenght.forEach(item => { listOfStrenght.push(articles.filter(one => one.strength_of_evidence.toLowerCase() === item.toLowerCase())) })
    }

    //listOfResult.push(listOfMethod);
    //listOfResult.push(listOfClaim);
    listOfResult.push(listOfStrenght);

    return listOfResult
}


export default function MultipleSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [methodologies, setMethodologies] = React.useState([]);
    const [claim, setClaim] = React.useState([]);
    const [strength, setStrength] = React.useState([]);


    const methodologiesHandleChange = (event) => {
        setMethodologies(event.target.value);

    };

    const claimHandleChange = (event) => {
        setClaim(event.target.value);

    };

    const strengthHandleChange = (event) => {
        setStrength(event.target.value);

    };


    return (
        <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Methodologies</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={methodologies}
                        onChange={methodologiesHandleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {methodologieNames.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, methodologies, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Claim</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={claim}
                        onChange={claimHandleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {claimNames.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, claim, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Strength</InputLabel>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={strength}
                        onChange={strengthHandleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {strengthNames.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, claim, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
        </div>
    );
}

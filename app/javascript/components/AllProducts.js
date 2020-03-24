import React from "react";
import {Container} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';
import carAccessories from '../assets/images/caraccessories.jpg';
import fc1 from '../assets/images/fc1.jpg';
import fc2 from '../assets/images/fc2.jpg';
import fc3 from '../assets/images/fc3.jpg';
import fc4 from '../assets/images/fc4.jpg';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import fb from "../assets/images/Facebook.svg";
import ig from "../assets/images/Instagram.svg";
import tw from "../assets/images/Twitter.svg";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(3),
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function valueText(value) {
    return '${value}s';
}

export default function AllProducts() {
    const classes = useStyles();

    const [state, setState] = React.useState({

    });

    const [value, setValue] = React.useState([1800, 2000]);

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    const handleSlider = (event, newValue) => {
        setValue(newValue);
    }



    return (
        <Container maxWidth={"lg"}>
            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Scale</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:10"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:12"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:18"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:72"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:24"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:32"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:50"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:700"
                                />
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Product Line</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Classic Cars"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Motorcycles"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Trucks & Buses"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Vintage Cars"
                                />
                            </FormGroup>
                        </FormControl>

                        <Typography id="range-slider" gutterBottom>
                            Year
                        </Typography>
                            <Slider
                                value={value}
                                onChange={handleSlider}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valueText}
                            />

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Buy Price</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Under $50"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="$50 - $100"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="$100 +"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={carAccessories} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Add To Cart
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper className={classes.paper} style={{marginTop: '20px'}}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={fc1} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Add To Cart
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={fc3} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper className={classes.paper} style={{marginTop: '20px'}}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={fc2} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Add To Cart
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">$19.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>


            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">Quick Links</Typography>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button>Search</Button>
                            <Button>Contact Us</Button>
                            <Button>Refund Policy</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                        <Typography variant="h5">Join the mailing list</Typography>
                        <TextField id="outlined-basic" label="E-Mail Address" variant="outlined"/>
                        <Button variant="contained" color="primary"
                                style={{padding: '15px', marginLeft: '5px'}}>Subscribe</Button>
                    </Grid>
                </Grid>

                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" gutterBottom>All Major Credit Cards Accepted</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                        <img src={fb} height={24} width={32}/>
                        <img src={ig} height={24}/>
                        <img src={tw} height={24}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}
import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  root1: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

function valuetext(value) {
  return { value };
}
function handleClick() {
  console.log("123")
  console.log("456")
  return 123;
}

export default function DashBoards() {
  handleClick();
  {}
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  const [value, setValue] = React.useState("female");
  const handleChange1 = event => {
    setValue(event.target.value);
  };
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange2 = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
  });

  const handleChange3 = name => event => {
    setState({ ...state, [name]: event.target.checked });
    
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            台指選擇權回測系統
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["回測系統", "基本資訊頁面"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["其他"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange2("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>交易策略設定</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <form className={classes.root1} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-helper">開始年份</InputLabel>
                  <Select
                    value={values.starting_year}
                    onChange={handleChange}
                    inputProps={{
                      name: "starting_year",
                      id: "age-helper"
                    }}
                  >
                    <MenuItem value={2004}>2004</MenuItem>
                    <MenuItem value={2005}>2005</MenuItem>
                    <MenuItem value={2006}>2006</MenuItem>
                    <MenuItem value={2007}>2007</MenuItem>
                    <MenuItem value={2008}>2008</MenuItem>
                    <MenuItem value={2009}>2009</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                  </Select>
                  {/* <FormHelperText>Some important helper text</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">開始月份</InputLabel>
                  <Select
                    value={values.starting_month}
                    onChange={handleChange}
                    inputProps={{
                      name: "starting_month",
                      id: "age-simple"
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-helper">結束年份</InputLabel>
                  <Select
                    value={values.ending_year}
                    onChange={handleChange}
                    inputProps={{
                      name: "ending_year",
                      id: "age-helper"
                    }}
                  >
                    <MenuItem value={2004}>2004</MenuItem>
                    <MenuItem value={2005}>2005</MenuItem>
                    <MenuItem value={2006}>2006</MenuItem>
                    <MenuItem value={2007}>2007</MenuItem>
                    <MenuItem value={2008}>2008</MenuItem>
                    <MenuItem value={2009}>2009</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                  </Select>
                  {/* <FormHelperText>Some important helper text</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-simple">結束月份</InputLabel>
                  <Select
                    value={values.ending_month}
                    onChange={handleChange}
                    inputProps={{
                      name: "ending_month",
                      id: "age-simple"
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">近/遠月</FormLabel>
                  <RadioGroup
                    aria-label="position"
                    value={value.name}
                    onChange={handleChange1}
                    row
                    inputProps={{
                      name: "ending_month",
                      id: "age-simple"
                    }}
                  >
                    <FormControlLabel
                      value="near"
                      control={<Radio color="primary" />}
                      label="近月"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="far"
                      control={<Radio color="primary" />}
                      label="遠月"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="near+far"
                      control={<Radio color="primary" />}
                      label="近月+遠月"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">買權/賣權</FormLabel>
                  <RadioGroup
                    aria-label="position"
                    value={value.name}
                    onChange={handleChange1}
                    row
                    inputProps={{
                      name: "call_put",
                      id: "age-simple"
                    }}
                  >
                    <FormControlLabel
                      value="call"
                      control={<Radio color="primary" />}
                      label="買權"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="put"
                      control={<Radio color="primary" />}
                      label="賣權"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="call+put"
                      control={<Radio color="primary" />}
                      label="買權+賣權"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  required
                  id="standard-required"
                  label="買賣權比例"
                  defaultValue="0.6"
                  className={classes.textField}
                  margin="normal"
                />
                <FormControl component="fieldset">
                  <FormLabel component="legend">是否真實計算保證金</FormLabel>
                  <RadioGroup
                    aria-label="position"
                    value={value.name}
                    onChange={handleChange1}
                    row
                    inputProps={{
                      name: "real_bail",
                      id: "age-simple"
                    }}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="是"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="nope"
                      control={<Radio color="primary" />}
                      label="否"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
              </form>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange2("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>交易條件設定</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <TextField
                required
                id="standard-required"
                label="單結算月總口數限制"
                defaultValue="20"
                className={classes.textField}
                margin="normal"
              /> 
              <TextField
                required
                id="standard-required"
                label="每日交易口數限制"
                defaultValue="5"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="權利金最低限制"
                defaultValue="20"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="價外程度(點)"
                defaultValue="500"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="單一結算月最大本金"
                defaultValue="500000"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="單一結算月可用本金比例"
                defaultValue="0.6"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="訓練數量"
                defaultValue="2"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="訓練月份"
                defaultValue="2"
                className={classes.textField}
                margin="normal"
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange2("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>交易策略設定</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange3("checkedA")}
                      value="checkedA"
                      id="VIX"
                    />
                  }
                  onClick={ () => {document.getElementById("VIX").innerHTML='sadas';}}
                  label="VIX"
                  display="none"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange3("checkedB")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="EMA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange3("checkedB")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Spread"
                />
              </FormGroup>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ justifyContent: "center" }}
          >
            Submit
          </Button>
        </Grid>
      </main>
    </div>
  );
}

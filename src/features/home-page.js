import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AddIcon from 'material-ui-icons/Add';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Titlebar } from 'shared/components';

const styleSheet = createStyleSheet('HomePage', theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        padding: theme.spacing.unit
    },
    demoTitle: {
        margin: '1.5em 0 0.5em 0'
    },
    demoContainer: {
        backgroundColor: theme.palette.background.contentFrame,
        padding: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit
    },
    input: {
        margin: theme.spacing.unit
    }
}));

@observer
class HomePage extends React.Component {
    @observable name = '';

    @action
    onChange(event) {
        this.name = event.target.value;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Titlebar>React MobX MUI Seed</Titlebar>

                <div className={classes.content}>
                    <Typography type="title" className={classes.demoTitle}>
                        Buttons
                    </Typography>
                    <div className={classes.demoContainer}>
                        <Button raised className={classes.button}>
                            Default
                        </Button>
                        <Button
                            raised
                            color="primary"
                            className={classes.button}
                        >
                            Primary
                        </Button>
                        <Button
                            raised
                            color="accent"
                            className={classes.button}
                        >
                            Accent
                        </Button>
                        <Button
                            raised
                            color="contrast"
                            className={classes.button}
                        >
                            Contrast
                        </Button>
                        <Button
                            raised
                            color="accent"
                            disabled
                            className={classes.button}
                        >
                            Disabled
                        </Button>
                        <Button fab color="primary" className={classes.button}>
                            <AddIcon />
                        </Button>
                    </div>

                    <Typography type="title" className={classes.demoTitle}>
                        Text Field Using MobX
                    </Typography>
                    <div className={classes.demoContainer}>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.input}
                            value={this.name}
                            onChange={event => this.onChange(event)}
                        />
                    </div>
                    <Typography type="body2">
                        {this.name}
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styleSheet)(HomePage);

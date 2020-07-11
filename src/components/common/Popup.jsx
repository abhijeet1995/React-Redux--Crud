
import React, { useState } from "react";

//material-ui
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles';


export default function PopUp({ message, type, open, close, onClose }) {
	

	const color = {
		success: "#03C58D",
		error: "#FF5847"
	}

	const useStyles = makeStyles(theme => ({
		root: {
			'& .MuiSnackbarContent-root': {
				backgroundColor: color[type]
			}
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<Snackbar
				className={classes.root}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={open}
				message={message}
				onClose={close}
				action={
					<React.Fragment>
						<IconButton
							aria-label="close"
							color="inherit"
							onClick={close}
						>
							<CloseIcon />
						</IconButton>
					</React.Fragment>
				}
			/>
		</div>
	);
}
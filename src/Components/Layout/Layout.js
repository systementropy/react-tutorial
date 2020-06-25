import React from 'react';
import Aux from '../../HOC/Aux';
import ToolBar from '../../Components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
const layout = (props) =>(
	<Aux>
		<ToolBar />
		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
);
export default layout;
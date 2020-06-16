import React from 'react'
const layout = (props) =>(
	<div>
		<div>
			Toolbars, SideDrawers, Backdrawers
		</div>
		<main>
			{props.children}
		</main>
	</div>
);
export default layout;
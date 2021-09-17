import { A11yDialog } from 'react-a11y-dialog';
import React from 'react';

export const BakerModal = (props) => {
	const dialogMain = React.useRef();

	return (
		<div>
			<button type="button" onClick={() => dialogMain.current.show()}>
				Open the dialog
			</button>

			<A11yDialog
				id="my-accessible-dialog"
				dialogRef={(dialog) => (dialogMain.current = dialog)}
				title="The dialog title"
			>
				<p>Some content for the dialog.</p>
			</A11yDialog>
		</div>
	);
};

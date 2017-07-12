/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { Slot } from 'react-slot-fill';

/**
 * WordPress dependencies
 */
import { __ } from 'i18n';
import { Panel, PanelBody } from 'components';

/**
 * Internal Dependencies
 */
import './style.scss';
import { getSelectedBlock } from '../../selectors';

const BlockInspector = ( { hasSelectedBlock } ) => {
	if ( ! hasSelectedBlock ) {
		return <span className="editor-block-inspector__no-blocks">{ __( 'No block selected.' ) }</span>;
	}

	return (
		<Panel>
			<PanelBody>
				<Slot name="Inspector.Controls" />
			</PanelBody>
		</Panel>
	);
};

export default connect(
	( state ) => {
		return {
			hasSelectedBlock: !! getSelectedBlock( state ),
		};
	}
)( BlockInspector );

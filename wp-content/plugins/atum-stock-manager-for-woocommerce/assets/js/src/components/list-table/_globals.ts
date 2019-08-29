/* =======================================
   GLOBALS FOR LIST TABLES
   ======================================= */

import Settings from '../../config/_settings';
import { Utils } from '../../utils/_utils';

export default class Globals {
	
	$atumList: JQuery = null;
	$atumTable: JQuery = null;
	$editInput: JQuery = null;
	$searchInput: JQuery = null;
	$searchColumnBtn: JQuery = null;
	$searchColumnDropdown: JQuery = null;
	$stickyCols: JQuery = null;
	$floatTheadStickyCols: JQuery = null;
	enabledStickyColumns: boolean = false;
	enabledStickyHeader: boolean = false;
	$scrollPane: any = null;
	jScrollApi: any = null;
	$collapsedGroups: JQuery = null;
	filterData = {};
	
	constructor(
		protected settings: Settings,
		protected defaults?: any
	) {
		
		this.initProps();
	
	}
	
	initProps() {
		
		// Initialize selectors.
		this.$atumList = (this.defaults && this.defaults.$atumList) || $('.atum-list-wrapper');
		this.$atumTable = (this.defaults && this.defaults.$atumTable) || this.$atumList.find('.atum-list-table');
		this.$editInput = (this.defaults && this.defaults.$editInput) || this.$atumList.find('#atum-column-edits');
		this.$searchInput = (this.defaults && this.defaults.$searchInput) || this.$atumList.find('.atum-post-search');
		this.$searchColumnBtn = (this.defaults && this.defaults.$searchColumnBtn) || this.$atumList.find('#search_column_btn');
		this.$searchColumnDropdown = (this.defaults && this.defaults.$searchColumnDropdown) || this.$atumList.find('#search_column_dropdown');
		
		let inputPerPage: string = this.$atumList.parent().siblings('#screen-meta').find('.screen-per-page').val(),
		    perPage: number      = null;
		
		// Initialize the filters' data
		if (!$.isNumeric(inputPerPage)) {
			perPage = this.settings.get('perPage') || 20;
		}
		else {
			perPage = parseInt(inputPerPage);
		}
		
		this.filterData = (this.defaults && this.defaults.filterData) || {
			token          : this.settings.get('nonce'),
			action         : this.$atumList.data('action'),
			screen         : this.$atumList.data('screen'),
			per_page       : perPage,
			show_cb        : this.settings.get('showCb'),
			show_controlled: (Utils.filterQuery(location.search.substring(1), 'uncontrolled') !== '1' && $.address.parameter('uncontrolled') !== '1') ? 1 : 0,
			order          : this.settings.get('order'),
			orderby        : this.settings.get('orderby'),
		}
		
	}
	
}

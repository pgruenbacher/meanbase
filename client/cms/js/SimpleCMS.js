(function($) {
	$(document).ready(function() {
		// Drop Down Menus
		var activator = $('.sc-has-dropdown');
		var dropdown = $('.sc-dropdown, .sc-dropdown-right');
		var dropdownClass = '.sc-dropdown, .sc-dropdown-right';
		var hiddenClass = 'sc-hidden';

		activator.click(function(e){
			dropdown
				.not($(e.target).find(dropdownClass))
				.not($(e.target))
				.not($(e.target).parents())
				.addClass(hiddenClass);

			$(e.target).find(dropdownClass).toggleClass(hiddenClass);
			e.stopPropagation(); 
		});

		$(document).click(function(){                   
			dropdown.addClass(hiddenClass);
		});

		// Edit Mode
		$('#sc-editMode, #sc-cancel').click(function(e){
			$('#sc-editMode').toggleClass('fa-edit').toggleClass('fa-check-circle').toggleClass('sc-light-green');
			$('#sc-cancel, #sc-trash').toggleClass('sc-hidden');
			$('#sc-page-settings').toggleClass('sc-hidden');
		});

		$('.sc-panel-toggle').click(function(e) {
			$(e.target).parents('.sc-panel').find('.sc-panel-body').slideToggle();
			$(e.target).children('.sc-panel-toggle-caret').toggleClass('fa-rotate-90');
		});

		$('.sc-toggle-active').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('fa-toggle-on').toggleClass('fa-toggle-off');
			
		});
	});
})(jQuery);
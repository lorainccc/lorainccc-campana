acf.add_filter('color_picker_args', function( args, $field ){
	
	// do something to args
	args.palettes = ['#68286E', '#B44D1D', '#0055A5', '#007BBF', '#0D8896', '#6CB545', '#FFC600', '#0055A5'];
	
	
	// return
	return args;
			
});
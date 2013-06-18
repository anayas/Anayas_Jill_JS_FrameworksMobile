var parseBootyForm = function(data){
  //uses form data here;
	console.log(data);
};

$(document).ready(function(){
	
	var rbform = $('#contactmeform'),
		rberrorslink=$('#rberrorslink')
	;
	
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName +'</li>';
				console.log(fieldName);2
			};
			$("#note ul").html(html);			
		},
		submitHandler: function(){
			var data = rbform.serializeArray()
			parseBootyForm(data);
  
		}
		
	});
	
	
	
});

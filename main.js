$( function() {
	$('.list-toggle').click(function(){
	  $('.u-list').toggleClass('open');
	});
  });
 
  $(function() {
		$('#price').change(function () {
		var val = $(this).val();
		$('#slider_price').slider("values",0 ,val);
		});	
		
		$('#price2').change( function() {
			var val2 = $(this).val();
			$('#slider_price').slider("values",1 ,val2);
		});
	
		$("#slider_price" ).slider({
			range: true,
			min: 0,
			step:1000,
			max: 1000000,
			values: [1000, 1000000 ],
			slide: function( event, ui ) {
				$('#price').val(numberWithSpaces(ui.values[0]));
				$('#price2').val(numberWithSpaces(ui.values[1]));
			}
		});
			$('#price').val(numberWithSpaces($('#slider_price').slider("values", 0)));
			$('#price2').val(numberWithSpaces($('#slider_price').slider("values", 1)));
  });
  
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };


function clearcheckbox (){
	document.getElementById("defaultCheck1").checked = false;
	document.getElementById("defaultCheck2").checked = false;
	document.getElementById("defaultCheck3").checked = false;
  };

document.querySelector('.autoFocus').focus();


let arraySearchHistory = [];
function myUserSearch (){
	
	if (document.getElementById("userInputSearch").value != ''){
		arraySearchHistory.push(" " + document.getElementById("userInputSearch").value);
		document.getElementById("userSearch").innerHTML = `Показаны результаты для "${document.getElementById("userInputSearch").value}".`;
		document.getElementById("userHistory").innerHTML = `Вы искали: "${arraySearchHistory}."`;
		if(arraySearchHistory.length >=5 ){
			arraySearchHistory = [];
		}
	document.getElementById("searchBlock").style.display='flex';
	document.getElementById("userSearchBox").style.display='flex';
	}
	else
	document.getElementById("searchBlock").style.display='none';
	return false;
  };
  function closeButton(){
	document.getElementById("userSearchBox").style.display='none';
	document.getElementById("searchBlock").style.display='none';
  };
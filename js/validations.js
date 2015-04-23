	$(document).ready(function(){
		var colores = ["#E74C3C","#EB9532","#F9BF3B","#87D37C", "#03C9A9"];
    	$("#password").keyup(function(){
    		valor = $(this).val();
    		var x = 20;
    		var contador_color = 0;
    		var len = valor.length;
    		if(len >= 6){
				x = eval(x+20);
				contador_color++;
    		}
    		var flag = 0;
			for(var i=0;i<len && flag==0;i++) {
				if(/[0-9]/.test(valor.charAt(i))){
					x = eval(x+20);
					contador_color++;
					flag = 1;
				}
			}
			flag = 0;
			for(var i=0;i<len && flag==0;i++) {
				if(/\W/.test(valor.charAt(i))){
					x = eval(x+20);
					contador_color++;
					flag = 1;
				}
			}
			flag = 0;
			for(var i=0;i<len && flag==0;i++) {
				if(/[A-Z]/.test(valor.charAt(i))){
					x = eval(x+20);
					contador_color++;
					flag = 1;
				}
			}
			$(this).css("width", x+"%");
			$(this).css("background-color", colores[contador_color]);

			});
		$("#password").blur(function(){
			x = $(this).val();
			len = x.length;
			if(len>0){
				$(this).css("background-color", "white");
			}					
			$(this).css("width", "100%");
			validar_pass();
		});

		$("#repassword").change(function(){
			validar_pass();
		});
	
	});
	function validar_pass(){
		constante = $("#password").val();
		variable = $("#repassword").val();
		if(constante === variable){
			$("#repassword").css("background-color", "#87D37C");
		}
		else{
			$("#repassword").css("background-color", "#E74C3C");
		}
	}
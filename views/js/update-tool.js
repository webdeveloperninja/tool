
$(document).ready(function() {
    
        if( !$('#orderQty').val() && !$('#idealQty').val() ) {
            $('#orderQty').attr('readonly',true); // On Load, should it be read only?
            $('#idealQty').attr('readonly',true); // On Load, should it be read only?
            $( "#auto-order-box" ).prop( "checked", false );
        } else {
            $( "#auto-order-box" ).prop( "checked", true );
        }
    

    $("#auto-order-box").bootstrapSwitch();
    $('#auto-order-box').on('switchChange.bootstrapSwitch', function(event, state) {
        if($('#auto-order-box:checked').length){
            $('#orderQty').val('');
            $('#idealQty').val('');
            $('#orderQty').attr('readonly',false); //If checked - Read only
            $('#idealQty').attr('readonly',false); //If checked - Read only
        }else{
            $('#orderQty').val('');
            $('#idealQty').val('');
            $('#orderQty').attr('readonly',true);//Not Checked - Normal
            $('#idealQty').attr('readonly',true);//Not Checked - Normal
        }
    });
});
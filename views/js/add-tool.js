
$(document).ready(function() {
    $('#custom-tool-type-input').hide();
    $('#custom-tool-type').click(function() {
        $("#custom-tool-type-input").toggle(this.checked);
        $("#select-type").toggle(!this.checked);
    });
    
    
    $('#custom-brand-input').hide();
    $('#custom-brand-checkbox').click(function() {
        $("#custom-brand-input").toggle(this.checked);
        $("#brand-select").toggle(!this.checked);
    });
    
    
    $('#custom-material-input').hide();
    $('#custom-material-checkbox').click(function() {
        $("#custom-material-input").toggle(this.checked);
        $("#material-select").toggle(!this.checked);
    });
    

    if(!$('#auto-order-box:checked').length){
        $('#orderQty').attr('readonly',true); // On Load, should it be read only?
        $('#idealQty').attr('readonly',true); // On Load, should it be read only?
    }

    $("#auto-order-box").bootstrapSwitch();
    $('#auto-order-box').on('switchChange.bootstrapSwitch', function(event, state) {
        if($('#auto-order-box:checked').length){
            $('#orderQty').attr('readonly',false); //If checked - Read only
            $('#idealQty').attr('readonly',false); //If checked - Read only
        }else{
            $('#orderQty').attr('readonly',true);//Not Checked - Normal
            $('#idealQty').attr('readonly',true);//Not Checked - Normal
        }
    });
});
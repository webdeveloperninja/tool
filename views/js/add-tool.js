
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
    
    
});
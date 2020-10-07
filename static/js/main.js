function select_lang() {
    window.location.href = URI(window.location.href).search({'lang': $.trim($('#langselect option:selected').val())});
}

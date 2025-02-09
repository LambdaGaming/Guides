function ToggleVis( elem ) {
    var div = document.getElementById( elem )
    var btn = document.getElementById( elem + "Button" )
    if ( div.classList.contains( "hidden" ) ) {
        div.classList.remove( "hidden" )
        btn.innerText = btn.innerText.replace( "Show", "Hide" )
    }
    else {
        div.classList.add( "hidden" )
        btn.innerText = btn.innerText.replace( "Hide", "Show" )
    }
}

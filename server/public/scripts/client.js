$( document ).ready( onReady );

function onReady(){
    
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#addItemButton' ).on( 'click', getItems );
}

function addItem(){
    console.log( 'in addItem' );
    // get user input & pl
    let objectToSend = {
        color: $( '#sizeIn' ).val(),
        size: $( '#colorIn' ).val(),
        name: $( '#nameIn' ).val()
    } // end objectToSEnd
    console.log( 'sending:', objectToSend );
    // send object to server via POST
    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: objectToSend
    }).then( function ( response ){
        console.log( 'back form POST with:', response );
        // if successful update dom

    }).catch( function ( err ){
        // catch all errosrs
        alert( 'erro adding item' );
        console.log( err );

    })

}

function getItems(){
    // make a GET AJAX call to server
    $.ajax({
        type: 'GET',
        url: '/inventory',
    }).then( function (response ){
        console.log( 'back from GET:', response );
        let el = $( '#inventoryOut' );
        el.empty();
        for( let i=0; i<response.length; i++ ){
            el.append( `<li><strong>${response[i].name }</strong>: ${response[i].size}, ${response[i].color}</li>`)
        }
    }).catch( function ( err ){
        alert( 'error getting inventory form server' );
        console.log( err );
    })
    // if sucessfull loop thru response
}
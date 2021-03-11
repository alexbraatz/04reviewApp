// requiree
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );


app.use( express.static( 'server/public'  ) );
app.use( bodyParser.urlencoded( {extended: true} ) );

const port = 5000;
let inventory = [];

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
} )

app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( inventory );
})

app.post( '/inventory', ( req, res )=>{
    console.log( 'in /inventory POST', req.body );
    inventory.push( req.body );
    res.sendStatus( 201 );
})
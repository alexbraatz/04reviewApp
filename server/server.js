// requiree
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );


app.use( express.static( 'server/public'  ) );
app.use( bodyParser.urlencoded( {extended: true} ) );

const port = 5000;

app.listen( port, ()=>{
    console.log( 'server is up on:', port );
} )

app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( 'meow' );
})

app.post( '/inventory', ( req, res )=>{
    console.log( 'in /inventory POST', req.body );
    res.send( 'meow' );
})
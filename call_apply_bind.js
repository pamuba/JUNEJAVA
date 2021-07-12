//1.call
var pokemon = {
    firstName:'Pika',
    lastName:'Chu',
    getPokeName: function(){
        return this.firstName+" "+this.lastName;
    }
}

var pokemonName = function(snack, hobby){
    // console.log(this)
    console.log(this.getPokeName()+ ' I choose you');
    console.log(this.getPokeName()+ ' loves '+snack+' and '+ hobby);

}

// pokemonName('chips','movies');
// var bindPokemon = pokemonName.bind(pokemon)
//10 mins
// bindPokemon('chips','movies');

//2.call
// pokemonName.call(pokemon, 'chips','movies')

//3.apply
pokemonName.apply(pokemon, ['chips','movies'])



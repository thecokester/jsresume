


console.log('Name: Markus Coke'.toUpperCase());

console.log('\n');

console.log('Career: Web Developer, Playa Hata');

console.log('\n');

console.log('Description: I am A vegan from Mars who likes long walks in the park & sililoquy ');

console.log('\n');

console.log('My Interests:');

console.log('\n');

console.log('* NetFlix & Chill');

console.log('\n');

console.log('* Trains Planes & Automobiles');

console.log('\n');

console.log('* Messing with Sasquatch');

console.log('\n');

console.log('* Unicorn Hunting');

console.log('\n');

console.log('My Previous Experience');

console.log('\n');



function displayposition(companyName, title, description) {
    console.log(companyName + title + description);
}

displayposition( 'Covalence',  'Web Devoloper' , 'Born and raised in Birmingham AL. I graduated Huffman High School in 2007 After wards I Attended the University of Alabama majoring in Political Science. Immediately I realizedcollege wasnt for me so I entered the workforce in retail for a short period of time.');

console.log('\n');

console.log('My Skills:');

console.log('\n');

console.log(' * Soccer');

console.log('\n');

console.log(' * Xbox & Playstion skills are on point');

console.log('\n')

console.log(displayskill(false, " Unicorn Hunting"));

console.log('\n');

console.log(' * Saspuatch Searching');

console.log('\n');

console.log(displayskill(true, "Lochness Monster Master Breeder"));

console.log('\n');

function displayskill(boolean, skill) {
    if (boolean=== true) {
        return "* Checkt it:" + skill;
        } else if (boolean ==false) {
            return '*' + skill;
        } else {
            return "Slowpoke";

        }
        }
    




//  false









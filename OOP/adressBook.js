let read = require('readline-sync');

class Input{
    returnAdress(){

    }

    inputFristName(){
        var firstName=read.question("Enter the name");
        try{
            if(firstName == null || !/^[a-zA-Z]/.test(firstName))
                throw"Name is invalid";
            else{
                return firstName;
            }
        }
        catch(err){
            console.log(err+" Try again");
            this.inputFirstName();
        }
    
    }
    inputLastName(){
        var lastName=read.question("Enter the name");
        try{
            if(lastName == null || !/^[a-zA-Z]/.test(lastName))
                throw"Name is invalid";
            else{
                return lastName;
            }
        }
        catch(err){
            console.log(err+" Try again");
            this.inputLastName();
        }

}
}
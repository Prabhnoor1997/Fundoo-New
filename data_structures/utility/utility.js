class Utility {
    binomialCoeff(n, k) {
        var res = 1;

        // Since C(n, k) = C(n, n-k)  
        if (k > n - k) {
            k = n - k;
        }

        // Calculate value of [n*(n-1)*---*(n-k+1)] / [k*(k-1)*---*1]  
        for (var i = 0; i < k; ++i) {
            res *= (n - i);
            res /= (i + 1);
        }

        return res;
    }

    catalan(n) {
        // Calculate value of 2nCn  
        var c = this.binomialCoeff(2 * n, n);

        // return 2nCn/(n+1)  
        return c / (n + 1);
    }


    readFromfile(path) {
        const fs = require('fs')
        var file = fs.readFileSync(path, 'utf-8');
        var spl = file.split(" ");
        return spl;
    }

    writeOnFile(path, str) {
        const fs = require('fs');
        var file = fs.writeFileSync(path, str, 'utf-8');
        return true;
    }

    dayFinder(year, month, day) {
        var tick = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        year -= month < 3;
        var r = (year + year / 4 - year / 100 + year / 400 + tick[month - 1] + day) % 7;
        var dDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
        return dDay[r];
    }
    getPalindrome() {
        let readlines = require('readline-sync');
        const dataStructObj = require('../dataStructures');
        var dequeueObj = new dataStructObj.Dequeue();
        var palindromecheck = readlines.question("Enter the String you want to check for palindrome----");

        for (var i = 0; i < palindromecheck.length; i++) {
            dequeueObj.addEnd(palindromecheck[i]);
        }
        return (dequeueObj);
    }

    checkPalindrome(pal) {
        var check = 1;

        for (var i = 0; i < pal.sizeOfDq() / 2; i++) {
            if (pal.removeEnd() == pal.removeFront()) {
                continue;

            }
            else {
                check = 0;
                break;


            }

        }
        if (check == 0)
            console.log("Not a palindrome");
        else
            console.log("Palindrome it is");
    }

    addToHash(spl) {
        const dataObj = require('../dataStructures');
        var hashObj = new dataObj.Hash(10);
        for (var i = 0; i < spl.length; i++) {
            hashObj.add(parseInt(spl[i]));
        }
        return hashObj;
    }

    addOrRemoveHash(hashObj) {
        let readlines = require('readline-sync');
        console.log("Before adding or removing the hash is --")
        for (var i = 0; i < 11; i++) {
            hashObj.print(i);
        }
        var r = readlines.question("enter the number you want to add or remove------");
        if (hashObj.search(r))
            hashObj.delete(r);
        else
            hashObj.add(r);
        for (var i = 0; i < 11; i++) {
            hashObj.print(i);
        }
    }

    getPrimeNumberInArray(n,twoDArray) {
        if (n >= 2) {
            twoDArray[0][0]=2;
        }
        
        for (var k=0;k<10;k++) {
            var index=0;
            for(var nu = 1; nu <= 100; nu++){
            var num=k*100+nu;
                var i = 2;
            while (i <= num - 1) {
                if (num % i == 0) {
                    break;
                }
                else if (i == num - 1) {
                    
                    if(k==0)
                    twoDArray[k][index+1]=num;
                    else
                    twoDArray[k][index]=num;
                    index++;
                    break;
                }
                i++;
            }
        }
     
        }
        return(twoDArray);
    }
}



module.exports = { Utility };
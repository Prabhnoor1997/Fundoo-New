const fs = require('fs');
var dataStruct = require('../../data_structures/dataStructures');


class Utility {


}

class Inventory {

    constructor(inventoryObj) {
        this.totalInventoryObj = inventoryObj;
        this.inventoryType;
        this.totalPrice;
    }

    valueForEntireInventory() {
        var total = 0;
        for (var i = 0; i < this.totalInventoryObj.length; i++) {
            for (var j = 0; j < this.totalInventoryObj[i].goods.length; j++) {
                total = total + this.totalInventoryObj[i].goods[j].pricePerKg * this.totalInventoryObj[i].goods[j].weight;
            }
        }
        this.totalPrice = total;
        return total;
    }
    valueOfParticularInventory(inventoryIndex) {
        var total = 0;
        for (var j = 0; j < this.totalInventoryObj[inventoryIndex].goods.length; j++) {
            total = total + this.totalInventoryObj[inventoryIndex].goods[j].pricePerKg * this.totalInventoryObj[inventoryIndex].goods[j].weight;
        }
        console.log("The total inventory cost for " + this.totalInventoryObj[inventoryIndex].name + " is ----Rs." + total);
        return (total);

    }
}

class InventoryCombined {
    constructor(type, total) {
        this.type = type;
        this.total = total;
    }



}
class Transaction {
    constructor(stock, amount, type) {
        this.stock = stock;
        this.type = type;
        this.amount = amount;
        this.time = Date(Date.now());;
    }
}

class Stocks {
    constructor(stockName, price, totalShare) {
        this.stockName = stockName;
        this.sharePrice = price;
        this.totalShare = totalShare;
    }

}

class StockAccount {
    constructor(file) {
        this.file = file;
        this.path = fs.readFileSync(file);
        this.stockAccount = JSON.parse(this.path);
        this.queueObj = new dataStruct.Queue();

    }

    valueOf() {
        var sum = 0;
        for (var i = 0; i < this.stockAccount.length; i++) {
            sum = sum + this.stockAccount[i].numOfShares * this.stockAccount[i].sharePrice;
        }
        return (sum);
    }

    buy(amount, stockName) {

        let stock = fs.readFileSync('./JSON/stocksAvailable.json');
        var stocks = JSON.parse(stock);
        let transactions = fs.readFileSync('./JSON/transaction.json');
        var transactionList = JSON.parse(transactions);

        try {
            for (var i = 0; i < stocks.length; i++) {
                if (stocks[i].stockName == stockName && stocks[i].totalShare >= amount) {
                    for (var j = 0; j < this.stockAccount.length; j++) {

                        if (this.stockAccount[j].stockName == stockName) {

                            console.log("Adding the shares of your Existing Stock");
                            this.stockAccount[j].totalShare = this.stockAccount[j].totalShare + amount;
                            stocks[i].totalShare = stocks[i].totalShare - amount;
                            this.stockAccount[j].sharePrice = stocks[i].sharePrice;
                            stocks = JSON.stringify(stocks, null, 2);
                            fs.writeFileSync('./JSON/stocksAvailable.json', stocks)
                            
                            var stockAccountStringified = JSON.stringify(this.stockAccount, null, 2);
                            fs.writeFileSync(this.file, stockAccountStringified);
                            var transaction = new Transaction(stockName, amount, "buy");
                            transactionList.push(transaction);
                            var transactionqueue = transaction;
                            this.queueObj.enqueue(transactionqueue);
                            transactionList = JSON.stringify(transactionList, null, 2);
                            fs.writeFileSync('./JSON/transaction.json', transactionList);
                            return true;
                        }

                    }

                    console.log("adding a new stock");
                    var newAddStock = new Stocks(stockName,stocks[i].sharePrice , amount);
                    this.stockAccount.push(newAddStock);
                    stocks[i].totalShare = stocks[i].totalShare - amount;
                    this.save(stocks);
                    var stockAccountStringified = JSON.stringify(this.stockAccount, null, 2);
                    fs.writeFileSync(this.file, stockAccountStringified);
                    var transaction = new Transaction(stockName, amount, "buy");
                    transactionList.push(transaction);
                    var transactionqueue = transaction;
                    this.queueObj.enqueue(transactionqueue);
                    transactionList = JSON.stringify(transactionList, null, 2);
                    fs.writeFileSync('./JSON/transaction.json', transactionList);
                    return true;
                }
            }
            throw "Invalid stock or the No. of shares that you wanna buy exceeds the remaining shares ";

        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    sell(amount, stockName) {
        let stock = fs.readFileSync('./JSON/stocksAvailable.json');
        var stocks = JSON.parse(stock);
        let transactions = fs.readFileSync('./JSON/transaction.json');
        var transactionList = JSON.parse(transactions);

        try {
            
            for (var i = 0; i < stocks.length; i++) {
                if (stocks[i].stockName == stockName) {
                    for (var j = 0; j < this.stockAccount.length; j++) {

                        if (this.stockAccount[j].stockName == stockName && this.stockAccount[j].totalShare >= amount) {

                            console.log("Selling the shares of your Existing Stock");
                            this.stockAccount[j].totalShare = this.stockAccount[j].totalShare - amount;
                            stocks[i].totalShare = stocks[i].totalShare + amount;
                            this.save(stocks);
                            this.stockAccount[j].sharePrice = this.stockAccount[j].sharePrice ;
                            var stockAccountString = JSON.stringify(this.stockAccount, null, 2);
                            fs.writeFileSync(this.file, stockAccountString);
                            var transaction = new Transaction(stockName, amount, "sell");
                            var transactionqueue = transaction;
                            this.queueObj.enqueue(transactionqueue);
                            transactionList.push(transaction);
                            transactionList = JSON.stringify(transactionList, null, 2);
                            fs.writeFileSync('./JSON/transaction.json', transactionList);
                            return true;
                        }

                    }
                }
            }
            throw "Insufficient Shares or You dont have this stock";

        }
        catch (err) {
            console.log(err);
            return false;
        }

    }
    save(stocks) {
        
        stocks = JSON.stringify(stocks, null, 2);
        fs.writeFileSync('./JSON/stocksholdings.json', stocks);
        return true;
    }

    printReport() {
        for (var i = 0; i < this.stockAccount.length; i++) {
            console.log("Comapany " + this.stockAccount[i].stockName + " Shares " + this.stockAccount[i].totalShare);
        }
        return true;
    }

}

function addShareToMarket(newStock) {
    let stock = fs.readFileSync('./JSON/stocksAvailable.json');
    var stocks = JSON.parse(stock);
    for (var i = 0; i < stocks.length; i++) {
        if (stocks[i].stockName == newStock.stockName) {
            console.log("Stock already exists");
            return false;
        }
    }
    var dataStruct = require('../../data_structures/dataStructures');
    var linkedListObj = new dataStruct.LinkedList();
    for (var i = 0; i < stocks.length; i++) {
        linkedListObj.add(stocks[i]);
    }
    linkedListObj.add(newStock);
    var curr = linkedListObj.head;
    var newMarket = [];
    while (curr) {
        newMarket.push(curr.element);
        curr = curr.next;
    }

    var market = JSON.stringify(newMarket, null, 2);
    fs.writeFileSync('./JSON/stocksAvailable.json', market);


}
function checkAdmin(){
    let read = require('readline-sync');
    var username=read.question("ENter your username---");
    var pass=read.question("Enter your Password----");
    if(username=="Parry"&&pass=="12345")
    return true;
    else{
        console.log("Invalid username or password");
        false;
}
    }
    


module.exports = { Utility, Inventory, InventoryCombined, StockAccount, Transaction, Stocks, addShareToMarket,checkAdmin }
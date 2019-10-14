class Calender{
    constructor(){
        this.tick = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        this.weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',];
        this.monthName = ['January','Februry','March','April','May','June','July','August',
                            'September', 'October','November','December'];
        this.monthPrint = [[' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ']];
    }
    firstDayOfWeek( year, month){
        year -= month < 3;
        return (year + year/4 - year/100 + year/400 + this.tick[month-1] + 1) % 7;
    }
    dayFinder(dayOfWeekCount){
        return this.weekDay[dayOfWeekCount];
    }
    monthMaker(dayOfWeekCount, arrMonth, month, year){
        var arrText='';
        var addDate= 1;
        console.log(this.monthName[month-1], year);
        console.log('S Mo Tu Wed Th Fri Sat');
        for (var i = 0; i < this.monthPrint.length; i++) {
            for (var j = 0; j < this.monthPrint[i].length; j++) {
                if( i == 0 && j <dayOfWeekCount){
                    arrText+=this.monthPrint[i][j]+'  ';
                    continue;
                }
                else if(addDate <= arrMonth[month-1]){
                    if(j>=dayOfWeekCount || addDate <= arrMonth[month-1]){
                        this.monthPrint[i][j] = addDate.toString();
                        addDate++;
                    }
                    if(addDate<=10 && addDate<arrMonth[month-1]){
                        arrText+=this.monthPrint[i][j]+'  ';
                    }
                    else{
                        arrText+=this.monthPrint[i][j]+' ';
                    }
                }
            }
            console.log(arrText);
            arrText='';
        }
    }
    
    makeCalendarQueue(dayOfWeekCount,arrMonth, month, year){
        const dataStructObj = require('../dataStructures');
        var queueObj = new dataStructObj.Queue();

        
        for(var i=0;i<42;i++){
            if(i<dayOfWeekCount)
                var dayObj=new WeekDay("  ",i);
            else{
                var dayObj=new WeekDay(i-dayOfWeekCount+1,i%7);
            }
            queueObj.enqueue(dayObj);
        }
        console.log(this.monthName[month-1], year);
        console.log('S   Mo  Tu  We Th  Fr  Sat');
        var daysInMonth=0;
        //console.log(arrMonth[month-1]);
        for(var i=0;i<6;i++){
            var str="";
            for(var k=0;k<7;k++){
                var date=queueObj.dequeue().date;
                if(date>0)
                daysInMonth++;
                if(daysInMonth>arrMonth[month-1]) 
                break;
                if(date<10 && date>0)
                date=date+" ";
                str=str+date+"  ";
            }
            console.log(str);
        
        }

        
        
    }

    makeCalendarStack(dayOfWeekCount,arrMonth, month, year){
        const dataStructObj = require('../dataStructures');
        var stackObj1 = new dataStructObj.Stack();
        var stackObj2=new dataStructObj.Stack();

        
        for(var i=0;i<42;i++){
            if(i<dayOfWeekCount)
                var dayObj=new WeekDay("  ",i);
            else{
                var dayObj=new WeekDay(i-dayOfWeekCount+1,i%7);
            }
            stackObj1.push(dayObj);
        }

        for(var i=0;i<42;i++)
        stackObj2.push(stackObj1.pop());

        console.log(this.monthName[month-1], year);
        console.log('S   Mo  Tu  We Th  Fr  Sat');
        var daysInMonth=0;
        //console.log(arrMonth[month-1]);
        for(var i=0;i<6;i++){
            var str="";
            for(var k=0;k<7;k++){
                var date=stackObj2.pop().date;
                if(date>0)
                daysInMonth++;
                if(daysInMonth>arrMonth[month-1]) 
                break;
                if(date<10 && date>0)
                date=date+" ";
                str=str+date+"  ";
            }
            console.log(str);
        
        }

        
        
    }
}
class WeekDay{
   
   
    constructor(date,weekday){
        this.date=date;
        this.weekday=weekday;
    }

    getDate(){
        return this.date;
    }

    getWeekday(){
        return this.weekday;
    }
}

module.exports = {
    Calender,WeekDay
}
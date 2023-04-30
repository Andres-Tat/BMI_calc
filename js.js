    


function calcBmi() {                                      //Создаем функцию по подсчету Индекса Массы тела, подставляем эту функцию с выражением в каждый объект, используя метод (This)
    this.bmiRes = this.mass / this.height ** 2
    return this.bmiRes
}

const piter = {                    //Создал объект Петя
    name: 'Piter',
    mass: 72,
    height: 1.88,
    calcBmi
}

const denis = {                    //Создал объект Денис
    name: 'Denis',
    mass: 82,
    height: 1.73,
    calcBmi
}


piter.calcBmi()                   //Запускаем функцию Пети
denis.calcBmi()                   //Запускаем функцию Дениса  

console.log(piter.bmiRes)         //Выводим результат Пети
console.log(denis.bmiRes)         //Выводим результат Дениса  


//Создали условие, при котором у нас будет находиться большее число среди двух людей и выводить результат в консоль

if (piter.bmiRes > denis.bmiRes) {
    console.log(`Индекс массы тела ${piter.name} - (${piter.bmiRes}), больше чем у ${denis.name} - (${denis.bmiRes})`)
} else if (piter.bmiRes < denis.bmiRes) {
    console.log(`Индекс массы тела ${denis.name} - (${denis.bmiRes}), больше чем у ${piter.name} - (${piter.bmiRes})`)
}else {
    console.log("Произошла ошибка. Попробуйте еще раз")
}


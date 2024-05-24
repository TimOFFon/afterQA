/* =============================================================
-----------------  from YOUTUBE (IT-KAMASUTRA) -----------------
============================================================= */
{ // 1 ---------------------------------------------------------
    // console.log(({}).prototype === ({}).__proto__);

    /* Ответ: false
    Выражение {}.prototype вернёт undefined
    Выражение ({}).__proto__ вернёт prototype класса Object  */
}//------------------------------------------------------------

{ // 2 --------------------------------------------------------
    // function ITKamasutra() {}
    // console.log(ITKamasutra.prototype === ITKamasutra.__proto__);

    /* Ответ:  false
    Выражение ITKamasutra.prototype вернёт объект с единственным 
    свойством: constructor.
    Выражение ITKamasutra.__proto__ вернёт prototype класса 
    Function*/
}//-------------------------------------------------------------

{ // 3 ---------------------------------------------------------
    // function ITKamasutra() {}
    // function ITIncubator (){}
    // console.log(ITKamasutra.__proto__ === ITIncubator.__proto__);
    // console.log(ITKamasutra.prototype === ITIncubator.prototype);

    /* Ответ: true / false 
    Выражения ITKamasutra.__proto__ и ITIncubator.__proto__ 
    вернут prototype класса Function.
    Выражение ITKamasutra.prototype вернёт объект с единственным 
    свойством: constructor, и этот constructor будет ссылаться 
    на функцию ITKamasutra().
    Выражение ITIncubator.prototype вернёт объект с единственным 
    свойством: constructor, и этот constructor будет ссылаться 
    на функцию ITIncubator().*/
}//-------------------------------------------------------------

{ // 4 ---------------------------------------------------------
    // let Component = (props) => {
    //     return `<div> I don't know Prototype</div>`
    // }
    // console.log(Component.prototype === Object.prototype);

    /* Ответ: false 
    Выражение Component.prototype вернёт undefined, потому что у 
    стрелочных функций нет prototype.
    Выражение Object.prototype вернёт prototype класса Object*/
}//-------------------------------------------------------------

{ // 5 --------------------------------------------------------
    // let age = 18;
    // console.log(age.prototype === Number.prototype);
    // console.log(age.__proto__ === Number.prototype);

    /* Ответ: false / true
    Выражение age.prototype вернёт undefined
    Выражение Number.prototype вернёт prototype класса Number
    выражение age.__proto__ вернёт prototype класса Number
    */
}//-------------------------------------------------------------

{ // 6 ---------------------------------------------------------
    // class Hacker {}
    // console.log(Hacker.__proto__ === Function.prototype);

    /* Ответ: true
    Выражение  Hacker.__proto__ вернёт  prototype 
    класса Function.
    Выражение  Function.prototype вернёт  prototype 
    класса Function*/
}//-------------------------------------------------------------

{ // 7 ---------------------------------------------------------
    // function ITIncubator(){}
    // console.log(ITIncubator.__proto__ === '???');

    /* Ответ: Function.prototype */
}//-------------------------------------------------------------

{ // 8 --------------------------------------------------------
    // let count = 12;
    // console.log(count.__proto__ === '???');

    /* Ответ: Number.prototype */
}//------------------------------------------------------------


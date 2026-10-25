# Deklaracja zmiennej
```js
//definiowanie zmiennej jako obiekt
let myVariable = {
     a: 'text1',
     b: 'text2',
};
console.log(myVariable);

//zastępowanie elementu zmiennej
myVariable.a = 'new text1';
console.log(myVariable);

//dodanie kolejnego elementu do zmiennej
myVariable.c = 'text3';
console.log(myVariable);

//zastępowanie całej zmiennej
myVariable = {
    a1: 'text4'
};
console.log(myVariable);

//definiowanie stałej
const myConstant = {
    d: 'text5',
    e: 'text6'
};

//zastępowanie elementu stałej
//nie można zastąpić całej stałej, ale można zmieniać jej elementy
myConstant.d = 'new text5';
console.log(myConstant);
```
# Operacje na liczbach
| Symbol |	Opis |	Przykład |
| :---: | --- | --- |
| ```+``` |	Dodawanie: Oblicza sumę dwóch liczb	| ```1 + 2```<br>oczekiwany wynik ```3``` |
| - |	Odejmowanie: Oblicza różnicę między dwiema liczbami |	```1 - 2```<br>oczekiwany wynik ```-1``` |
| * |	Mnożenie: Oblicza iloczyn dwóch liczb |	```1 * 2```<br>oczekiwany wynik ```2``` |
| / |	Dzielenie: Oblicza iloraz dwóch liczb |	```1 / 2```<br>oczekiwany wynik ```0.5``` |
| % |	Reszta z dzielenia: Oblicza resztę z dzielenia dwóch liczb	| ```1 % 2```<br>oczekiwany wynik ```1``` |

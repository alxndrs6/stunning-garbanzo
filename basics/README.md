# Released notes
[basics/2-js-basics/1-data-types]()

# 1-data-types
## Zmienne
### Deklaracja zmiennej
```js
let myVariable = {
     a: 'text1',
     b: 'text2',
};
```
### Aktualizowanie zmiennej
#### Zastępowanie elementu zmiennej
```js
myVariable.a = 'new text1';
```
#### Dodanie kolejnego elementu do zmiennej
```js
myVariable.c = 'text3';
```
#### Zastępowanie całej zmiennej
```js
myVariable = {
    a1: 'text4'
};
```
## Stałe
### Deklaracja stałej
```js
const myConstant = {
    d: 'text5',
    e: 'text6'
};
```
### Aktualizacja stałej
Nie można zastąpić całej stałej, ale można zmieniać jej elementy
```js
myConstant.d = 'new text5';
```
## Operacje na liczbach
| Symbol |	Opis |	Przykład |
| :---: | --- | --- |
| ```+``` |	Dodawanie: Oblicza sumę dwóch liczb	| ```1 + 2```<br>oczekiwany wynik ```3``` |
| - |	Odejmowanie: Oblicza różnicę między dwiema liczbami |	```1 - 2```<br>oczekiwany wynik ```-1``` |
| * |	Mnożenie: Oblicza iloczyn dwóch liczb |	```1 * 2```<br>oczekiwany wynik ```2``` |
| / |	Dzielenie: Oblicza iloraz dwóch liczb |	```1 / 2```<br>oczekiwany wynik ```0.5``` |
| % |	Reszta z dzielenia: Oblicza resztę z dzielenia dwóch liczb	| ```1 % 2```<br>oczekiwany wynik ```1``` |
## Operacje na stringach
### Standardowe łączenie łańcuchów
```js
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //WitajŚwiecie!
myString1 + " " + myString2 + "!"; //Witaj Świecie!
myString1 + ", " + myString2 + "!"; //Witaj, Świecie!
```
### Template literals
```js
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Witaj, świecie!
`${myString1}, ${myString2}!` //Witaj, świecie!
```
> [!NOTE]
> Obie metody dają ten sam efekt, ale literały szablonowe zachowują wszystkie spacje i łamanie linii. Literały szablonowe są zazwyczaj preferowane do złożonego budowania łańcuchów, ponieważ są bardziej czytelne i doskonale obsługują wielolinijkowe teksty

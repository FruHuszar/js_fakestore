# Javascript Fakestore

## Masonry (vízesés) elrendezés

```css
@media (min-width: 600px){
  .tartalom {
    display: block; 
    column-count: 3;
    column-gap: 20px;
    width: 90vw;
    max-width: 800px;
    margin: 30px auto;
  }

  .card {
    margin: 0 0 20px 0; 
    display: inline-block;
    width: 100%;
  }
}
```

## Animált underline
- Az ::after egy pszeudo-elem, amivel extra tartalmat vagy dekorációt illeszthetünk egy HTML elemen belülre, leghátulra.
- Jelenleg ez egy vonal, 0% X axis mérettel, ami hoverre 100% lesz.

```css
ul li a, 
ul li a:visited {
  /*valódi underline levétele*/
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

/*0% scale*/
ul li a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s;
}

/*hoverre 100%-os scale*/
ul li a:hover::after {
  transform: scaleX(1);
}

```

## Capitalize

- A nevek teljesen kisbetűsek, ezért a szebb megjelenítés érdekében Nagy Szókezdő formázást adtam hozzá. //

```js
<td class="capitalize">${this.#obj.name.firstname} ${this.#obj.name.lastname}</td>

/*
.capitalize {
  text-transform: capitalize;
}
*/
```            
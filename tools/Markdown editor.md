# Links

[GitHub Pages](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code) <br>
[Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/github-actions-auto-update/README.md)

# Syntax

## Basics

| Style                  | Syntax           | Keyboard shortcut | Example                                  | Output                                 |
| ---------------------- | ---------------- | ----------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** ** or __ __` | Command + B       | `**This is bold text**`                  | **This is bold text**                  |
| Italic                 | `* * or _ _`     | Command + I       | `*This text is italicized*`              | _This text is italicized_              |
| Strikethrough          | `~~ ~~ or ~ ~`   | None              | `~~This was mistaken text~~`             | ~~This was mistaken text~~             |
| Bold and nested italic | `** ** and _ _`  | None              | `**This text is *extremely* important**` | **This text is _extremely_ important** |
| All bold and italic    | `*** ***`        | None              | `***All this text is important***`       | **_All this text is important_**       |
| Subscript              | `<sub> </sub>`   | None              | `This is a <sub>subscript</sub> text`    | This is a <sub>subscript</sub> text    |
| Superscript            | `<sup> </sup>`   | None              | `This is a <sup>superscript</sup> text`  | This is a <sup>superscript</sup> text  |
| Underline              | `<ins> </ins>`   | None              | This is an <ins>underlined</ins> text    | This is an <ins>underlined</ins> text  |

## Table

### Standardowa tabela

| Kolumna 1 | Kolumna 2 |
| --------- | --------- |
| Text      | Text      |
| Text      | Text      |

```md
| Kolumna 1 | Kolumna 2 |
| --------- | --------- |
| Text      | Text      |
| Text      | Text      |
```

### Tabela z wyrównaniem do lewej (default)

| Kolumna 1 | Kolumna 2 |
| :-------- | :-------- |
| Text      | Text      |
| Text      | Text      |

```md
| Kolumna 1 | Kolumna 2 |
| :-------- | :-------- |
| Text      | Text      |
| Text      | Text      |
```

### Tabela z wyrównaniem do prawej

| Kolumna 1 | Kolumna 2 |
| --------: | --------: |
|      Text |      Text |
|      Text |      Text |

```md
| Kolumna 1 | Kolumna 2 |
| --------: | --------: |
|      Text |      Text |
|      Text |      Text |
```

### Tabela z wyśrodkowaniem

| Kolumna 1 | Kolumna 2 |
| :-------: | :-------: |
|   Text    |   Text    |
|   Text    |   Text    |

```md
| Kolumna 1 | Kolumna 2 |
| :-------: | :-------: |
|   Text    |   Text    |
|   Text    |   Text    |
```

## Cytowanie

### Cytat standardowy

> Cytat

```md
> Cytat
```

### Cytat zagnieżdżony

> Cytat standardowy
>
> > Cytat zagnieżdżony

```md
> Cytat standardowy
>
> > Cytat zagnieżdżony
```

## Alerts

> [!NOTE]
> Useful information that users should know, even when skimming content.

```md
> [!NOTE]
> Useful information that users should know, even when skimming content.
```

> [!TIP]
> Helpful advice for doing things better or more easily.

```md
> [!TIP]
> Helpful advice for doing things better or more easily.
```

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

```md
> [!IMPORTANT]
> Key information users need to know to achieve their goal.
```

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

```md
> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.
```

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

```md
> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

## Linkowanie

Text context [Markdown editor](https://github.com/alxndrs6/stunning-garbanzo/edit/main/tools/Markdown%20editor.md))

## Listy

### Lista standardowa

- Text1

* Text2

- Text3

```md
- Text1

* Text2

- Text3
```

### Lista numerowana

1. Text1
2. Text2
3. Text3

```md
1. Text1
2. Text2
3. Text3
```

### Lista zagnieżdżona

1. First list item
   - First nested list item
     - Second nested list item

```md
1. First list item
   - First nested list item
     - Second nested list item
```

### Lista zadań

- [x] Text1
- [ ] Text2
- [ ] Text3

```md
- [x] Text1
- [ ] Text2
- [ ] Text3
```

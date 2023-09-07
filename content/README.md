# How to create content

## File Structure

The file structure is as follows:

```
content/
    0_CATEGORY/
        0_index.md
        1_ARTICLE.md
        2_ARTICLE.md
    1_CATEGORY2/
        0_index.md
        1_ARTICLE.md
        2_ARTICLE.md
    2_CATEGORY3/
        0_index.md
```

In the content folder, there are folders for each category. Each category folder is named with a number at the beginning, followed by an underscore, followed by the name of the category. The number at the beginning is used to sort the categories. The category folder should contain an `0_index.md` file, which is the main page for the category. The category folder can also contain the articles for that category. The articles should be named with a number at the beginning, followed by an underscore, followed by the name of the article. The number at the beginning is used to sort the articles.

The naming of the category and article only matter for organization. The later shown, will be fetched from the index file & the article file.

## Create a new Article

## To create a new article, create a new file in the appropriate category folder.

i.e. `content/0_CATEGORY/1_ARTICLE.md`

The article is in markdown format.

## Markdown Basics

### Headers

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

### Emphasis

```
*italic*
**bold**
***bold italic***
~~strikethrough~~
```

### Lists

```
1. Ordered List
2. Ordered List
3. Ordered List

- Unordered List
- Unordered List
- Unordered List
```

### Links

```
[Link Text](https://www.example.com)
```

[Link Text](https://www.example.com)

### Images

```
![Alt Text](https://www.example.com/image.png)
```

![Alt Text](https://www.example.com/image.png)

### Code

```
`inline code`
```

`inline code`

### Code Blocks

````
```javascript
const example = 'example';
````

```javascript
const example = 'example';
```

### Blockquotes

```

> Blockquote

```

> Blockquote

### Horizontal Rule

```
---
```

---

### Tables

```

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

```

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

### Math

```

$y = x^2$

```

$y = x^2$

### Custom Tags

```
<youtube>dQw4w9WgXcQ</youtube>
```

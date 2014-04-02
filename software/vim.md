
## Vim can use maths to edit text

In technical writing, especially writing computer code, 
numbers are common. Sometimes you need to change these numbers
using maths, e.g. increasing by `+ 1` the value representing 
column names in a for loop to operate on a matrix. 

Vim allows editing numbers in this way, without ever dipping 
into insert mode: typing any number followed by
`<C-a>` and `<C-x>` (think of "add" and "remove - x")
will result in the next instance of a number being increased or 
decreased by the specified amount. 

'http://vim.wikia.com/wiki/Recovering_file_'
<C-x> <C-f> triggers autocompletion of filenames relative to the current working directory.
This is explained in a popular [stack overflow exchange](http://stackoverflow.com/questions/1919492/when-in-vim-insert-mode-is-there-a-way-to-add-filepath-autocompletion)
<C-w> deletes the current word in insert mode

gq is a very powerful command, automatically breaking a long line (up to
wherever you specify (e.g. "gqg" will break up all long lines until the end of
the document). 


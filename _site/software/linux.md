http://overapi.com/linux/
du -h -d 1
grep -r -l --include=*.md - Software . | xargs gvim
fdupes
export PATH="~/programs/neovim/build/bin:$PATH"
find . -printf %s %pn|sort -nr|head
http://stackoverflow.com/questions/12522269/bash-how-to-find-the-largest-file-in-a-directory-and-its-subdirectories

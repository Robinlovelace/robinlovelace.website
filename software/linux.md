http://overapi.com/linux/
du -h -d 1
grep -r -l --include=*.md - Software . | xargs gvim
fdupes
export PATH="~/programs/neovim/build/bin:$PATH"

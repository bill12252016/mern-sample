
export NEWSTRING=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1`
echo $NEWSTRING >> README.md
#cd templates
#cp -rp .index.html index.html
#sed -i -- 's|'__search_and_replace_here'|'${NEWSTRING}'|g' index.html
#cd -
git commit -a -m "testing change new string $NEWSTRING"; git push

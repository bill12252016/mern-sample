export NEWSTRING=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1`
echo $NEWSTRING >> README.md

cd dist
cp -rp ../_templates/server.bundle.js server.bundle.js 
cp -rp ../_templates/app.38cadece68164b703568.js app.38cadece68164b703568.js
sed -i -- 's|'__search_and_replace_here'|'${NEWSTRING}'|g' server.bundle.js
sed -i -- 's|'__search_and_replace_here'|'${NEWSTRING}'|g' app.38cadece68164b703568.js
cd -

cp -rp _templates/Header.js client/modules/App/components/Header/Header.js
cd client/modules/App/components/Header
sed -i -- 's|'__search_and_replace_here'|'${NEWSTRING}'|g' Header.js
cd -

echo "testing change new string $NEWSTRING"
git commit -a -m "testing change new string $NEWSTRING"; git push

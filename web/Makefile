
all: help

help:
	echo help

babel:
	babel lib/ -d src/

test: babel
	mocha -R spec

eslint:
	DEBUG="eslint:cli-engine" eslint .

watch:
	watchd lib/**.js test/**.js package.json -c 'bake babel'

release: version push publish

version:
	standard-version -m '%s'

push:
	git push origin master --tags

publish:
	npm publish


#################################################
open:
	shopify app open

serve:
	shopify app serve

db-reset:
	npx sequelize-cli --env default db:migrate:undo:all
	npx sequelize-cli --env default db:migrate

db-reset-file:
	npx sequelize-cli --env default db:migrate:undo:all --to $(filename)
	npx sequelize-cli --env default db:migrate

db-migrate:
	npx sequelize-cli --env default db:migrate
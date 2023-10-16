#!/bin/bash
rm -rf db.test.sqlite
touch db.test.sqlite
NODE_ENV=test npx sequelize db:migrate
npx jest
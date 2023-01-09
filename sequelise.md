
# Prepare the sequelise files/folders.
npx sequelize init

# Create object (table)
npx sequelize-cli model:generate --name Dimensions --attributes length:integer,width:integer,height:integer


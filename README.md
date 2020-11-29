# Giraffle
Quick Raffle Generator and Drawing App

[www.giraffle.me](http://www.giraffle.me)

![website](src/assets/images/website.png)

## Running Application

### Initial setup
This project uses MongoDB. 

The follow mongodb setup commands only need to be performed on initial setup of MongoDB on your system. The following are instructions for setup for a Mac.

```
# install mongodb using brew
brew install mongodb

# create the folder where mongo will store its data
mkdir -p /usr/local/var/mongodb

# ensure this data directory has the correct permissions
sudo chown -R `id -un` /usr/local/var/mongodb

# mongodb stores its configuration file under /usr/local/etc/mongod.conf
# check this file to confirm the dbPath has been set correctly, or to get this value in the future
cat /usr/local/etc/mongod.conf

# should give output similar to this:
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
```

This project also uses Yarn as a dependency manager.

To install yarn on your (Mac) system, run the following command:
```
brew install yarn
```

### Run application

```
# start local mongodb instance in a shell window
mongod -dbpath /usr/local/var/mongodb

# in a different shell window navigate to the root of this repository and run the following command:
yarn install

# run the application
npm start

# or to run watch on the file system:
npm run watch
```

After running the above commands you should see the application successfully run and output the localhost url and port where you can view the application running in your browser.

## Deployed Application

This application is deployed using Heroku and MongoDB Atlas.

## Future Features
"...a work is never truly completed [...] but abandoned..." Paul Valéry

Nice-to-have features:
- shortened links for easy raffle link sharing
- option to text short link to user to view results after entering raffle
- improved authorization controls
- better handling of input validation for users
- add testing

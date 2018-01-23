#! /bin/bash

# Update our git repo
git reset --hard HEAD
git pull

# Then find and kill the container currently running
docker stop $(docker ps | grep "updootsapp" | awk '{print $1;}')
# Rebuild it
docker build -t updootsapp .
# Finally bring it back up
docker run -d -p 4075:4075 updootsapp
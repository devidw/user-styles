#!/bin/bash

# if first arg not set exit
if [ -z "$1" ]; then
    echo "Usage: $0 <name>"
    exit 1
fi

domain=$1
folderpath="./sites/$domain/"
filepath=$folderpath"index.user.styl"

echo $filepath

mkdir $folderpath
cp -r ./templates/* $folderpath

# replace DOMAIN with $domain
sed -i "s/DOMAIN/$domain/g" $filepath

code $filepath
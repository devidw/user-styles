#!/bin/bash

domain=$1
folderpath="./sites/$domain/"
filepath=$folderpath"index.styl"

mkdir $folderpath
cp -r ./templates/* $folderpath
sed -i "s/{domain}/$domain/g" $filepath
code $filepath 
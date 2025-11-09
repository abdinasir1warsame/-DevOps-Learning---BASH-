#!/bin/bash

file=$1


if [ -f "$file" ]; then
echo "file "$file" exists"
  if [ -r "$file" ]; then
  echo "Readable"
 fi
 if [ -w "$file" ]; then
  echo "Writable"
 fi
 if [ -x "$file" ]; then
  echo "executable"
 fi
else 
    echo "file "$file" does not exist"

fi


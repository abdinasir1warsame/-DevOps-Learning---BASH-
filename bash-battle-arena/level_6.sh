#!/bin/bash

#Level 6: Argument Parsing

#Mission: Write a script that accepts a filename as an argument and prints the number of lines in that file. If no filename is provided, display a message saying 'No file provided'.

file="$1"

# Check if argument is missing
if [ -z "$file" ]; then
    echo "No file provided"
# Check if file exists
elif [ ! -f "$file" ]; then
    echo "File does not exist"
else
   LINE_COUNT=$(wc -l < "$1")
echo "The file '$1' has $LINE_COUNT lines."
fi
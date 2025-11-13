#!/bin/bash

#Level 6: Argument Parsing

#Mission: Write a script that accepts a filename as an argument and prints the number of lines in that file. If no filename is provided, display a message saying 'No file provided'.

file="$1"



if [ -z "$file" ]; then
    echo "No file provided"
elif [ -f "$file" ]; then
   echo " the number of lines in the file is $(wc -l < "$file") lines"
else
    echo "Please include a valid file"
fi


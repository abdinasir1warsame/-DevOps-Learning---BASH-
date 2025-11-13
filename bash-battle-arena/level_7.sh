#!/bin/bash

#Level 7: File Sorting Script

#Mission: Write a script that sorts all .txt files in a directory by their size, from smallest to largest, and displays the sorted list.



files=("$1"/*.sh)

if [ -z "$1" ]; then
   echo "dont leave directory path empty"
   
elif [ ${#files[@]} -gt 0 ]; then
   du -b "${files[@]}" | sort -n
else
    echo " No .sh files found in $1"
fi



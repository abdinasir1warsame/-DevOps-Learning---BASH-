#!/bin/bash

#Level 8: Multi-File Searcher

#Mission: Create a script that searches for a specific word or phrase across all .log files in a directory and outputs the names of the files that contain the word or phrase.


SEARCH_TERM="$1"
DIRECTORY="$2"

files=($DIRECTORY/*.log)

if ! [ -d "$DIRECTORY" ]; then

  echo "Unable to find directory: $DIRECTORY."

  exit 1

elif [ "${#files[@]}" -eq 0 ]; then

    echo "no .log files in $DIRECTORY"

else 

  grep -H  "$SEARCH_TERM"  "${files[@]}"




fi


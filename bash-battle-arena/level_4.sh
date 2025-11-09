#!/bin/bash

#Level 4: File Manipulation

#Mission: Create a script that copies all .txt files from the Arena directory to a new directory called Backup.

if [[ -d "Arena" ]]; then

mkdir -p Backup

  for file in "Arena/"*.txt; do
  
    if [[ -f "$file" ]]; then
  
    cp "$file" Backup

    fi

  done

echo "Backup completed succesfully"

fi
#!/bin/bash
set -euo pipefail

folder="$1"
file="$2"
text="$3"
base_dir="$HOME/onedrive/documents/my_folder"

# Check if base directory exists
if ! [ -d "$base_dir" ]; then
    mkdir "$base_dir"
fi

make_folder_structure() {
    
    if [[ -z "$folder" ]]; then
        # No argument passed — keep asking user until valid
        while true; do
            echo "Enter your directory name:"
            read folder

            if [[ -z "$folder" ]]; then
                echo "Input can't be empty"

            elif [[ -d "$base_dir/$folder" ]]; then
                echo "Directory already exists"
            else
                mkdir "$base_dir/$folder"
                echo "directory successfully created"
                break
            fi
        done

    else
        # Argument provided
        if [[ -d "$base_dir/$folder" ]]; then
            
            while true; do
            echo "Directory already exists, input a new directory name"
            read folder
             if [[ -d "$base_dir/$folder" ]]; then
                echo "Directory already exists, input a new directory name"
             elif [[ -z "$folder" ]]; then
                echo "Directory cant be empty"
             else
                  mkdir "$base_dir/$folder"
                echo "directory successfully created"
                break 
            fi        
            done  
        else
            mkdir "$base_dir/$folder"
            echo "directory successfully created"
        fi
    fi
      
   
    if [[ -z "$file" ]]; then
        # No argument passed — keep asking user until valid
        while true; do
            echo "Enter your file name:"
            read file

            if [[ -z "$file" ]]; then
                echo "Input can't be empty"

            elif [[ -f "$base_dir/$folder/$file" ]]; then
                echo "file already exists"
            else
                touch "$base_dir/$folder/$file"
                echo "file successfully created"
                
                break
            fi
        done

    else
        # Argument provided
        if [[ -f "$base_dir/$folder/$file" ]]; then
            
            while true; do
            echo "File already exists, input a new file name"
            read file
             if [[ -f "$base_dir/$folder/$file" ]]; then
                echo "File already exists, input a new File name"
             elif [[ -z "$file" ]]; then
                echo "File cant be empty"
             else
               touch "$base_dir/$folder/$file"
                echo "file successfully created"
                break  
              fi     
            done  
        else
            touch "$base_dir/$folder/$file"
            echo "directory successfully created"
          
        fi
    fi
if [[ -z "$text" || -f "$base_dir/$folder/$file" ]]; then
   while true; do
     echo "Input your text for the file"
     read text

     if [[ -z "$text" ]]; then
       echo "input can't be empty"
     else 
        echo "$text" > "$base_dir/$folder/$file"
        break
     fi
   done  
fi 
cat "$base_dir/$folder/$file"
}

make_folder_structure
#!/bin/bash

# Source and backup directories
SOURCE_DIR="/c/Users/abdin/onedrive/documents/my_folder"
BACKUP_DIR="/c/Users/abdin/onedrive/documents/my_folder_backup"

# Check if backup directory exists; create if it doesn't
if [[ ! -d "$BACKUP_DIR" ]]; then
    mkdir "$BACKUP_DIR"
fi

# Loop through all .txt files in the source directory
for file in "$SOURCE_DIR"/*.txt; do
    # Check if the file actually exists (in case there are no .txt files)
    if [[ -f "$file" ]]; then
        cp "$file" "$BACKUP_DIR"
        echo "Backing up $(basename "$file")"
    fi
done

echo "Backup complete!"
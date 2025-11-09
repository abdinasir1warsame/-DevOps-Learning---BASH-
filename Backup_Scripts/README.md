# Text File Backup Script

A simple Bash script to automate the backup of `.txt` files from a source directory to a backup directory. Perfect for keeping your important text files safe.

## Features

- Automatically creates the backup directory if it doesn't exist.
- Iterates through all `.txt` files in the source folder.
- Copies each file to the backup folder.
- Provides progress output for each file backed up.
- Displays a completion message when finished.

## Prerequisites

- Bash shell (Linux, macOS, or Windows with Git Bash / WSL)
- Read/write permissions for the source and backup directories

## Usage

1. **Set directories**

   Edit the script to define your source and backup directories:

   ```bash
   SOURCE_DIR="/c/Users/abdin/onedrive/documents/my_folder"
   BACKUP_DIR="/c/Users/abdin/onedrive/documents/my_folder_backup"
   ```

2. **Loop through all .txt files in the source directory**
   Each file is checked to ensure it exists before being copied:

   ```bash

   for file in "$SOURCE_DIR"/*.txt; do
     if [[ -f "$file" ]]; then
        cp "$file" "$BACKUP_DIR"
        echo "Backing up $(basename "$file")"
     fi
   done

   ```

3. **Completion message**
   After all files are processed:

   ```bash

   echo "Backup complete!"

   ```

## Make executable

```bash

   chmod +x backup_script.sh

```

## Run the script

```bash

 ./backup_script.sh


```

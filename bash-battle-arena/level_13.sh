#!/bin/bash

# Level 13: Backup Script with Rotation
# Mission: Backup a directory and keep only the last 5 backups

SOURCE_DIR="$1"                        
BACKUP_DIR="$HOME/backups"             

mkdir -p "$BACKUP_DIR"


backups=( "$BACKUP_DIR"/* )


while [ "${#backups[@]}" -ge 5 ]; do
    rm -rf "${backups[0]}"
    backups=( "$BACKUP_DIR"/* )  
done

TIMESTAMP=$(date +%Y%m%d%H%M%S)
mkdir "$BACKUP_DIR/backup_$TIMESTAMP"

cp -r "$SOURCE_DIR"/. "$BACKUP_DIR/backup_$TIMESTAMP"/
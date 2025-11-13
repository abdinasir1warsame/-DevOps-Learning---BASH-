#!/bin/bash

#Level 15: Boss Battle 3 - Advanced Scripting

#Mission: Combine the skills you've gained! Write a script that:

#1. Presents a menu to the user with the following options:

#- Check disk space
#- Show system uptime
#- Backup the Arena directory and keep the last 3 backups
#- Parse a configuration file settings.conf and display the values

#2. Execute the chosen task.

parse_config() {
    file="$1"

    while IFS= read -r line; do
        [[ -z "$line" || "$line" =~ ^# ]] && continue
        key="${line%%=*}"
        value="${line#*=}"
        echo "$key: $value"
    done < "$file"
}

back_up_rotation() {
    SOURCE_DIR="$1"
    BACKUP_DIR="$HOME/backups"

    mkdir -p "$BACKUP_DIR"

    backups=( "$BACKUP_DIR"/* )
    while [ "${#backups[@]}" -ge 3 ]; do
        rm -rf "${backups[0]}"
        backups=( "$BACKUP_DIR"/* )
    done

    TIMESTAMP=$(date +%Y%m%d%H%M%S)
    mkdir "$BACKUP_DIR/backup_$TIMESTAMP"
    cp -r "$SOURCE_DIR"/. "$BACKUP_DIR/backup_$TIMESTAMP"/
    echo "Backup done: $BACKUP_DIR/backup_$TIMESTAMP"
}

checkDiskUsage() {
    read -p "Please input the directory: " DIRECTORY
    read -p "Please input the threshold (bytes): " THRESHOLD

    while true; do
        disk_usage=$(du -sb "$DIRECTORY" | cut -f1)
        if [ "$disk_usage" -ge "$THRESHOLD" ]; then
            echo "You have exceeded your limit ($disk_usage ≥ $THRESHOLD)"
            break
        fi
        sleep 1
    done
}

show_uptime() {
    if command -v uptime &>/dev/null; then
        uptime
    elif command -v powershell.exe &>/dev/null; then
        powershell.exe -Command "(Get-Date) - (gcim Win32_OperatingSystem).LastBootUpTime"
    else
        echo "Uptime command not available"
    fi
}


while true; do
    echo ""
    echo "Enter 1 for Disk space"
    echo "Enter 2 to Show system uptime"
    echo "Enter 3 to Backup the Arena directory"
    echo "Enter 4 to Parse settings.conf"
    echo "Enter 5 to Exit"

    read -p "Input option: " choice

    if [[ "$choice" == "1" ]]; then
        checkDiskUsage
    elif [[ "$choice" == "2" ]]; then
        show_uptime
    elif [[ "$choice" == "3" ]]; then
        read -p "Enter the Arena directory to backup: " DIR
        back_up_rotation "$DIR"
    elif [[ "$choice" == "4" ]]; then
        read -p "Enter path to settings.conf: " CONF
        parse_config "$CONF"
    elif [[ "$choice" == "5" ]]; then
        echo "Exiting..."
        break
    else
        echo "Invalid input! Choose 1-5"
    fi
done
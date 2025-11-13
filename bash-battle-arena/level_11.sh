#!/bin/bash


#Level 11: Automated Disk Space Report

#Mission: Create a script that checks the disk space usage of a specified directory and sends an alert if the usage exceeds a given threshold.

DIRECTORY="$1"
THRESHOLD="$2"


while true; do

disk_usage=$(du -sb "$DIRECTORY" | cut -f1)

    if [ "$disk_usage" -ge "$THRESHOLD" ] ; then
        echo "you have exceeded your limit for this directory"
        break
    fi
    sleep 1
done
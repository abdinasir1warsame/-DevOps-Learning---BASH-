#!/bin/bash

#Level 7: File Sorting Script

#Mission: Write a script that sorts all .txt files in a directory by their size, from smallest to largest, and displays the sorted list.

#!/bin/bash

DIRECTORY="Arena"

if [ ! -d "$DIRECTORY" ]; then
    echo "Directory does not exist."
    exit 1
fi

find "$DIRECTORY" -type f -name "*.txt" -exec ls -lh {} + | sort -k 5,5 -h | awk '{ print $5, $9 }'
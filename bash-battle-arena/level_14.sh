#! /bin/bash 

#Level 14: User-Friendly Menu Script

#Mission: Create an interactive script that presents a menu with options for different system tasks (e.g., check disk space, show system uptime, list users), and executes the chosen task
checkDiskUsage(){

echo "Please enter below the directory and the required threshfold"
read -p "Please input the directory:"  DIRECTORY
read -p "Please input the threshold:"  THRESHOLD


while true; do

disk_usage=$(du -sb "$DIRECTORY" | cut -f1)

    if [ "$disk_usage" -ge "$THRESHOLD" ] ; then
        echo "you have exceeded your limit for this directory"
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

echo  "Enter 1 for Disk space. Enter 2 Show system uptime. Enter 3 list users"

read -p "Input option: " choice
 
 if [[ "$choice" =~ ^[1-3]$ ]]; then
    
    if [[ "$choice" == 1 ]]; then
       checkDiskUsage
    
    elif [[ "$choice" == 2 ]]; then
         show_uptime
    else
        cat /etc/passwd


    fi


 else
     echo "invalid input! Choice from options 1-3"

 fi



done


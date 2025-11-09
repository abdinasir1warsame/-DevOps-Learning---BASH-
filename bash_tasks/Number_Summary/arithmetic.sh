#!/bin/bash
set -euo pipefail

#function to summarise numbers: calculates sum, mean, max, min
number_summary() {

#declare arrays to store valid numbers and invalid arguments
declare -a numbers=()
declare -a invalid_arguments=()
#Initiliaze valiables
sum=0
max=
min=

# If the script gets command line arguments
if [[ $# -gt 0 ]]; then

# Loop through the arguments 
  for number in "$@"; do

# Check if arguments is a valid integer
  if ! [[ "$number" =~ ^-?[0-9]+$ ]]; then
      
   invalid_arguments+=("$number")
   continue

  else    
     # Add to numbers array.
      numbers+=("$number")
      # Add number to Sum
      (( sum += number ))
      # Update the max number is number is greater than max
      if [[ -z $max || $number -gt $max ]]; then
       max=$number
      fi 
      # Update the min if the number less than min
      if [[ -z $min || $number -lt $min ]]; then
       min=$number
      fi     
   fi


  done
# If no arguments are passed then, proceeds to request user input.
else
echo " "
 echo "Hi, start by inputting your numbers. When finished, type 'done'."
  while true; do

   echo " "
   echo "Please input a number"
   read number
# If the user types done, then exits the function immediatly
    if [[ "$number" == "done" ]]; then
    break
    fi   
# Checks if user input is a valid integer
    if ! [[ "$number" =~ ^-?[0-9]+$ ]]; then
  
      echo "Invalid input, please enter a number."


    else

       # Add to numbers array.
      numbers+=("$number")
      # Add number to Sum
      (( sum += number ))
      # Update the max number is number is greater than max
      if [[ -z $max || $number -gt $max ]]; then
       max=$number
      fi 
      # Update the min if the number less than min
      if [[ -z $min || $number -lt $min ]]; then
       min=$number
      fi   
    fi

done

fi

# Declares a variable as a integer with the length of the numbers array
array_length=${#numbers[@]}
# Checks if there is any numbers in the array to than get the mean
if [[ "$array_length" -gt 0 ]]; then
   
   mean=$(( sum / array_length ))

fi

# Checks wether the function has been ended before passing any inputs 
if [[ "${#numbers[@]}" -eq 0 ]]; then
   
   echo "you have ended before you started"
# printing the results into the terminal
else 
   
   echo "Sum of all numbers: $sum" 
   echo "Mean (average): $mean"
   echo "Maximum number: $max"
   echo "Minimum number: $min"
fi
# Checks if there are any non integer arguments passed into the function
if [[ "${#invalid_arguments[@]}" -gt 0 ]]; then
   # Prints the invalid arguments into the terminal
   echo "These are all the valid arguments that were rejected and removed"
   echo "${invalid_arguments[@]}"

fi

}

number_summary 
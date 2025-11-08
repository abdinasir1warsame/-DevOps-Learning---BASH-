#!/bin/bash

number_summary() {

declare -a numbers=()
declare -a invalid_arguments=()
sum=0
max=
min=


if [[ $# -gt 0 ]]; then

  for number in "$@"; do

  if ! [[ "$number" =~ ^-?[0-9]+$ ]]; then
      
   invalid_arguments+=("$number")
   continue

  else    
      numbers+=("$number")
      (( sum += number ))

      if [[ -z $max || $number -gt $max ]]; then
       max=$number
      fi 

      if [[ -z $min || $number -le $min ]]; then
       min=$number
      fi     
   fi


  done

else
echo " "
 echo "Hi, start by inputting your numbers. When finished, type 'done'."
  while true; do

   echo " "
   echo "Please input a number"
   read number

    if [[ "$number" == "done" ]]; then
    break
    fi   

    if ! [[ "$number" =~ ^-?[0-9]+$ ]]; then
  
      echo "Invalid input, please enter a number."


    else

      numbers+=("$number")
      (( sum += number ))

      if [[ -z $max || $number -gt $max ]]; then
       max=$number
      fi 

      if [[ -z $min || $number -le $min ]]; then
       min=$number
      fi     
    fi

done

fi


array_length=${#numbers[@]}

if [[ "$array_length" -gt 0 ]]; then
   
   mean=$(( sum / array_length ))

fi


if [[ "${#numbers[@]}" -eq 0 ]]; then
   
   echo "you have ended before you started"

else 
   
   echo "Sum of all numbers: $sum" 
   echo "Mean (average): $mean"
   echo "Maximum number: $max"
   echo "Minimum number: $min"
fi

if [[ "${#invalid_arguments[@]}" -gt 0 ]]; then
   
   echo "These are all the valid arguments that were rejected and removed"
   echo "${invalid_arguments[@]}"

fi

}

number_summary 
#!/bin/bash

#Level 12: Simple Configuration File Parser

#Mission: Write a script that reads a configuration file in the format KEY=VALUE and prints each key-value pair.

$file="$1"

while IFS= read -r LINE; do

key="${line%%=*}"      
value="${line#*=}" 

echo "$key: $value"

done < "$file"
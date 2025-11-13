


#Level 10: Boss Battle 2 - Intermediate Scripting

#Mission: Write a script that:

#1. Creates a directory called Arena_Boss.
#2. Creates 5 text files inside the directory, named file1.txt to file5.txt.
#3. Generates a random number of lines (between 10 and 20) in each file.
#4. Sorts these files by their size and displays the list.
#5. Checks if any of the files contain the word 'Victory', and if found, moves the file to a directory called Victory_Archive

if [ ! -d "Arena_Boss" ]; then

   mkdir Arena_Boss

fi

if [ ! -d "Victory_Archive" ]; then

   mkdir Victory_Archive

fi

touch Arena_Boss/{file1,file2,file3,file4,file5}.txt 

files=(Arena_Boss/*.txt)

for file in "${files[@]}"; do
 
   random_number=$(shuf -i 10-20 -n 1)

   for (( i = 0; i < $random_number; i++ )); do

     echo " " >> "$file"

   done

done

if [ "${#files[@]}" -gt 0 ]; then

   du -b "${files[@]}" | sort -n

fi   

for file in "${files[@]}"; do


 
 if  grep -q "Victory" "$file" ; then 

    mv "$file"  Victory_Archive

    echo "$FILE contains 'Victory' and has been moved to Victory_Archive."

 fi 

done



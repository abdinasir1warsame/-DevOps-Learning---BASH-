# Number Summary Script

This Bash script allows the user to input a list of numbers either as command-line arguments or interactively. It calculates the sum, mean, maximum, and minimum. Invalid inputs are rejected and listed separately.

## Features

- Works in interactive mode and command-line mode
- Rejects non-numeric inputs
- Calculates sum, mean, max, and min
- Uses arrays, loops, and conditionals
- Uses `set -euo pipefail` for safer scripting

## Usage

### Interactive Mode

Run the script and enter numbers one by one. Type `done` to finish.

```bash
./number_summary.sh
```

## Command-Line Mode

### Provide numbers directly as arguments:

./number_summary.sh 10 20 5 -3

## Example Output

### Interactive Example

```bash
Input a number please!
10
Input a number please!
5
Input a number please!
8
Input a number please!
done

Sum of all numbers: 23
Mean (average): 7
Maximum number: 10
Minimum number: 5
```

### Command-Line Example

```bash
$ ./number_summary.sh 10 20 5 -3

Sum of all numbers: 32
Mean (average): 8
Maximum number: 20
Minimum number: -3
```

## Error Handling and Settings

- `set -e` → Exit immediately if a command fails
- `set -u` → Treat unset variables as an error
- `set -o pipefail` → Ensures pipeline failures are caught
- Optional: `set -x` → Print commands before execution for debugging

## Author

Abdinasir Warsame

## Notes & Learning

- Handling interactive and command-line inputs
- Input validation using regex
- Using arrays and loops
- Calculating sum, mean, max, min
- Applying `set -euo pipefail` for robust scripts
- Writing user-friendly scripts with clear prompts

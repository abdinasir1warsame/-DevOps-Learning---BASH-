## File Permission Checker Script

A simple Bash script to verify whether a file exists and determine its permissions (read, write, execute).

### Features

Checks if the specified file exists.

Detects and reports if the file is readable, writable, and executable.

Provides clear and concise terminal output.

### Prerequisites

Bash shell (Linux, macOS, or Windows with Git Bash / WSL)

Read access to the file you want to check

### Usage

Make the script executable

```bash
chmod +x file_permission_checker.sh
```

Run the script with a file as an argument

```bash
./file_permission_checker.sh /path/to/your/file.txt
```

### Example Output

If the file exists and has all permissions:

```bash
file /path/to/your/file.txt exists
Readable
Writable
Executable
```

If the file exists but only some permissions:

```bash
file /path/to/your/file.txt exists
Readable
Writable
```

If the file does not exist:

```bash
file /path/to/your/file.txt does not exist
```

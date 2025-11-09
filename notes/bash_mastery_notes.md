# 🧭 **Bash Mastery Notes**

> 🚀 A quick reference for essential Bash scripting concepts — rewritten clean, modern, and beginner-friendly.

---

## 🥇 1. The Shebang  
```bash
#!/usr/bin/env bash
```
**What:** Tells the system which shell to use.  
**When:** Always at the top of every script.  
**Why:** Ensures your script runs in Bash no matter the system defaults.

---

## 🧾 2. Create & Run Scripts  
```bash
chmod +x script.sh    # Make script executable  
./script.sh           # Execute it
```
**When:** After saving your `.sh` file.  
**Why:** Without `chmod +x`, Bash can’t run your file directly.

---

## 💬 3. Comments  
```bash
# This is a helpful note
```
**When:** Use to explain tricky parts of your script.  
**Why:** Saves future you (and others) from confusion.

---

## 💡 4. Variables  
```bash
user="Nasir"
echo "Welcome, $user!"
```
**When:** You need to store info.  
**Why:** Makes code flexible and reusable.

---

## 🔢 5. Math in Bash  
```bash
a=5; b=3
echo $((a * b))   # Output: 15
```
**When:** You need calculations.  
**Why:** Avoids external tools like `bc`.

---

## 📥 6. User Input  
```bash
read -p "Enter your city: " city
echo "You live in $city"
```
**When:** You want interactive scripts.  
**Why:** Lets users provide data during runtime.

---

## ⚖️ 7. If Conditions  
```bash
if [ "$x" -gt 10 ]; then
  echo "x is large"
fi
```
**When:** You need logic decisions.  
**Why:** Controls execution flow.

---

## 🔁 8. If-Elif-Else  
```bash
if [ "$x" -lt 0 ]; then
  echo "Negative"
elif [ "$x" -eq 0 ]; then
  echo "Zero"
else
  echo "Positive"
fi
```
**When:** Multiple conditions.  
**Why:** Branch logic cleanly.

---

## 🧩 9. Nested If  
```bash
if [ "$x" -gt 0 ]; then
  if [ "$x" -lt 5 ]; then
    echo "Between 1–4"
  fi
fi
```
**When:** Need layered logic.  
**Why:** For precision checks.

---

## 🎯 10. Case Statement  
```bash
read -p "Pick 1-3: " num
case $num in
  1) echo "One" ;;
  2) echo "Two" ;;
  3) echo "Three" ;;
  *) echo "Invalid" ;;
esac
```
**When:** Many fixed choices.  
**Why:** Simpler than long `if` chains.

---

## 🍎 11. Arrays  
```bash
langs=("Bash" "Python" "Go")

echo "${langs[0]}"     # Bash
echo "${langs[@]}"     # All items
for l in "${langs[@]}"; do
  echo "Lang: $l"
done
```
**When:** Store lists.  
**Why:** Easier than managing many variables.

---

## 🔄 12. For Loop  
```bash
for i in {1..5}; do
  echo "Round $i"
done
```
**When:** Repeat fixed times.  
**Why:** Automates repetition.

---

## 🔂 13. While Loop  
```bash
count=1
while [ $count -le 3 ]; do
  echo "Count: $count"
  ((count++))
done
```
**When:** Repeat until condition fails.  
**Why:** Great for uncertain iterations.

---

## ⚙️ 14. Functions  
```bash
greet() {
  echo "Hi, $1!"
}

greet "Nasir"
```
**When:** Reuse logic.  
**Why:** Keeps code DRY (Don’t Repeat Yourself).

---

## 🛑 15. break  
```bash
for n in {1..5}; do
  [ "$n" -eq 3 ] && break
  echo "$n"
done
```
**When:** Exit loop early.  
**Why:** Stop when a condition is hit.

---

## ⏭️ 16. continue  
```bash
for n in {1..5}; do
  [ "$n" -eq 3 ] && continue
  echo "$n"
done
```
**When:** Skip an iteration.  
**Why:** Ignore special cases.

---

## 🧱 17. Error Handling  
```bash
set -e  # Stop on first error
set -u  # Error on undefined vars

mkdir /no/perm
echo "Won’t run if above fails"
```
**When:** Need safer scripts.  
**Why:** Prevents dangerous continuation.

| Feature | Meaning |
|----------|----------|
| `$?` | Exit code of last command |
| `set -e` | Exit on first error |
| `set -u` | Exit on undefined var |
| `trap` | Run custom code on exit/error |

---

## 🚪 18. Exit Codes  
```bash
if [ -f "data.txt" ]; then
  echo "OK"; exit 0
else
  echo "Missing"; exit 1
fi
```
**When:** Signal success or failure.  
**Why:** Lets systems or pipelines react.

| Code | Meaning |
|------|----------|
| 0 | Success |
| 1+ | Error |
| `$?` | Last exit code |
| `exit N` | Manually set exit status |

---

## 🧰 19. Useful `set` Options  
```bash
set -euxo pipefail
```
**Flags:**
| Flag | Purpose |
|------|----------|
| `-e` | Exit on any error |
| `-u` | Error on undefined vars |
| `-x` | Show commands before running |
| `-o pipefail` | Fail if *any* command in a pipeline fails |

**Why:** Makes scripts more robust and debuggable.

---

## 🧪 20. Test Expressions `[ ]`  
```bash
if [ -f "file.txt" ]; then
  echo "File exists"
fi
```

| Test | Description |
|------|-------------|
| `-f file` | True if file exists |
| `-d dir` | True if directory exists |
| `-r file` | File readable |
| `-w file` | File writable |
| `-x file` | File executable |
| `"$a" = "$b"` | Strings equal |
| `"$x" -gt 5` | x > 5 |
| `-z "$var"` | String empty |

**When:** Use inside conditionals.  
**Why:** Core of Bash decision-making.

---

### 🐚 Quick Tip  
> Always start small, test often, and add `set -euxo pipefail` at the top once your script grows.

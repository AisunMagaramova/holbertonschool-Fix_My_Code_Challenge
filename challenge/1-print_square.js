#!/usr/bin/python3
import sys

if len(sys.argv) <= 1:
    sys.stderr.write("Missing argument\n")
    sys.stderr.write("Usage: ./1-print_square.py <size>\n")
    sys.stderr.write("Example: ./1-print_square.py 8\n")
    sys.exit(1)

size = int(sys.argv[1])

for i in range(size):
    print("#" * size)
